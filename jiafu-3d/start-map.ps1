param([switch]$NoBrowser)
if(Test-Path -LiteralPath (Join-Path $PSScriptRoot '../start-game.ps1')){& (Join-Path $PSScriptRoot '../start-game.ps1') -NoBrowser:$NoBrowser;exit 0}
$ErrorActionPreference='Stop'
$mapRoot=$PSScriptRoot
$cacheFolder=Join-Path $mapRoot '.cache'
New-Item -ItemType Directory -Force -Path (Join-Path $cacheFolder 'temp') | Out-Null
$env:TEMP=Join-Path $cacheFolder 'temp'
$env:TMP=$env:TEMP
$nodePath='E:\Program Files\nodejs\node.exe'
if(-not(Test-Path -LiteralPath $nodePath)){$nodePath=(Get-Command node.exe -ErrorAction Stop).Source}
$serverPath=Join-Path $mapRoot 'server.mjs'
if(-not(Test-Path -LiteralPath (Join-Path $mapRoot 'dist/index.html'))){throw 'Build output is missing. Run npm run build in this folder.'}
$port=4177
for(;$port -lt 4190;$port++){
 $client=[Net.Sockets.TcpClient]::new()
 try{$client.Connect('127.0.0.1',$port);$busy=$true}catch{$busy=$false}finally{$client.Dispose()}
 if(-not $busy){break}
 try{$page=Invoke-WebRequest -Uri "http://127.0.0.1:$port/" -TimeoutSec 2 -UseBasicParsing;if($page.Content -match 'Jiafu3D'){if(-not $NoBrowser){Start-Process "http://127.0.0.1:$port/"};Write-Output "http://127.0.0.1:$port/";exit 0}}catch{}
}
if($port -ge 4190){throw 'No free local preview port.'}
$process=Start-Process -FilePath $nodePath -ArgumentList @(('"'+$serverPath+'"'),'--port',"$port") -WorkingDirectory $mapRoot -WindowStyle Hidden -PassThru -RedirectStandardOutput (Join-Path $cacheFolder 'map-server.log') -RedirectStandardError (Join-Path $cacheFolder 'map-server-error.log')
$meta=@{pid=$process.Id;script=$serverPath;port=$port;started=$process.StartTime.ToUniversalTime().ToString('o')}
$meta | ConvertTo-Json | Set-Content -LiteralPath (Join-Path $cacheFolder 'map-server.json') -Encoding utf8
$ready=$false
for($attempt=0;$attempt -lt 40;$attempt++){try{$r=Invoke-WebRequest -Uri "http://127.0.0.1:$port/" -TimeoutSec 1 -UseBasicParsing;if($r.StatusCode -eq 200){$ready=$true;break}}catch{};Start-Sleep -Milliseconds 200}
if(-not $ready){throw 'Local map server did not become ready. Check .cache/map-server-error.log.'}
if(-not $NoBrowser){Start-Process "http://127.0.0.1:$port/"}
Write-Output "http://127.0.0.1:$port/"
