param([switch]$NoBrowser,[int]$Port=4177)
$ErrorActionPreference='Stop'
$gameRoot=$PSScriptRoot
$cacheFolder=Join-Path $gameRoot '.cache'
New-Item -ItemType Directory -Path $cacheFolder -Force | Out-Null
$nodePath='E:\Program Files\nodejs\node.exe'
if(-not(Test-Path -LiteralPath $nodePath)){$nodePath=(Get-Command node.exe -ErrorAction Stop).Source}
if(-not(Test-Path -LiteralPath (Join-Path $gameRoot 'dist/jiafu/index.html'))){throw 'Unified game build is missing. Run npm run build.'}
$port=$Port
for(;$port -lt $Port+12;$port++){
 $client=[Net.Sockets.TcpClient]::new()
 try{$client.Connect('127.0.0.1',$port);$busy=$true}catch{$busy=$false}finally{$client.Dispose()}
 if(-not $busy){break}
 try{$page=Invoke-WebRequest -Uri "http://127.0.0.1:$port/" -TimeoutSec 2 -UseBasicParsing;if($page.Content -match 'XiaoxiangUnified'){if(-not $NoBrowser){Start-Process "http://127.0.0.1:$port/"};Write-Output "http://127.0.0.1:$port/";exit 0}}catch{}
}
if($port -ge $Port+12){throw 'No free local game port.'}
$serverPath=Join-Path $gameRoot 'server.mjs'
$process=Start-Process -FilePath $nodePath -ArgumentList @(('"'+$serverPath+'"'),'--port',"$port") -WorkingDirectory $gameRoot -WindowStyle Hidden -PassThru -RedirectStandardOutput (Join-Path $cacheFolder 'unified-server.log') -RedirectStandardError (Join-Path $cacheFolder 'unified-server-error.log')
@{pid=$process.Id;script=$serverPath;port=$port;started=$process.StartTime.ToUniversalTime().ToString('o')} | ConvertTo-Json | Set-Content -LiteralPath (Join-Path $cacheFolder 'unified-server.json') -Encoding utf8
for($attempt=0;$attempt -lt 40;$attempt++){try{$r=Invoke-WebRequest -Uri "http://127.0.0.1:$port/" -TimeoutSec 1 -UseBasicParsing;if($r.StatusCode -eq 200){if(-not $NoBrowser){Start-Process "http://127.0.0.1:$port/"};Write-Output "http://127.0.0.1:$port/";exit 0}}catch{};Start-Sleep -Milliseconds 150}
throw 'Local game did not become ready.'
