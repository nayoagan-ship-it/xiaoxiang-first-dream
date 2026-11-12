$ErrorActionPreference='Stop'
if(Test-Path -LiteralPath (Join-Path $PSScriptRoot '../stop-game.ps1')){& (Join-Path $PSScriptRoot '../stop-game.ps1');exit 0}
$metaPath=Join-Path $PSScriptRoot '.cache/map-server.json'
if(-not(Test-Path -LiteralPath $metaPath)){exit 0}
$meta=Get-Content -LiteralPath $metaPath -Raw | ConvertFrom-Json
$process=Get-Process -Id $meta.pid -ErrorAction SilentlyContinue
if($process -and $process.ProcessName -eq 'node' -and [Math]::Abs(($process.StartTime.ToUniversalTime()-[DateTime]::Parse($meta.started).ToUniversalTime()).TotalSeconds) -lt 1){Stop-Process -Id $meta.pid}
Remove-Item -LiteralPath $metaPath
