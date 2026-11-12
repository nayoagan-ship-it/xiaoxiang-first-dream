$ErrorActionPreference='Stop'
$metaPath=Join-Path $PSScriptRoot '.cache/unified-server.json'
if(-not(Test-Path -LiteralPath $metaPath)){exit 0}
$meta=Get-Content -LiteralPath $metaPath -Raw | ConvertFrom-Json
$process=Get-CimInstance Win32_Process -Filter ('ProcessId='+$meta.pid) -ErrorAction SilentlyContinue
if($process -and $process.Name -eq 'node.exe' -and $process.CommandLine.Contains('"'+$meta.script+'"')){Stop-Process -Id $meta.pid}
Remove-Item -LiteralPath $metaPath
