"""Package the full title/library/reading/3D application without dependencies."""
from pathlib import Path
import argparse,hashlib,json,re,zipfile
parser=argparse.ArgumentParser()
parser.add_argument('--version',required=True)
parser.add_argument('--output',type=Path,required=True)
args=parser.parse_args()
if not re.fullmatch(r'\d+(?:\.\d+)*',args.version):raise ValueError('Version must contain numbers and dots')
root=Path(__file__).resolve().parents[1];args.output.mkdir(parents=True,exist_ok=True)
archive=args.output/f'xiaoxiang-v{args.version}-full-game.zip'
with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED,compresslevel=6) as z:
 for p in sorted((root/'dist').rglob('*')):
  if p.is_file() and '.openai' not in p.relative_to(root).parts:z.write(p,Path('xiaoxiang')/p.relative_to(root))
 for name in ['server.mjs','start-game.ps1','stop-game.ps1','启动潇湘初梦.cmd','停止潇湘初梦.cmd','LICENSE']:
  z.write(root/name,Path('xiaoxiang')/name)
 z.writestr('xiaoxiang/README.txt',f'潇湘初梦 V{args.version}\n\n安装Node.js 22.12或更高版本，完整解压后双击“启动潇湘初梦.cmd”。运行构建版无需安装npm依赖。\n开始界面 → 展卷入梦 → 初入荣府（三维） / 黛玉葬花。\n三维游府：婆子引路、拜见外祖母、廊下见凤姐，再自行拜访迎春、探春和惜春，循话去见二舅母与宝玉，最后回住处找雪雁。也可随时探索其他地方。\nWASD行走，点击地面寻路，E交互，F俯瞰，J手记，M地图；对话中点击继续或空格，Esc暂停。\n进度保存在同一浏览器与地址，可继续旧进度。\n公开网址：https://xiaoxiang-first-dream.nayoagan.chatgpt.site/\n')
with zipfile.ZipFile(archive) as z:
 assert z.testzip() is None
 for name in ['dist/index.html','dist/scroll-library.js','dist/story-blossoms.js','dist/jiafu/index.html','server.mjs','启动潇湘初梦.cmd']:
  assert 'xiaoxiang/'+name in z.namelist(),name
 assert not any('/node_modules/' in name or '/.cache/' in name for name in z.namelist())
meta={'path':str(archive),'name':archive.name,'size':archive.stat().st_size,'sha256':hashlib.sha256(archive.read_bytes()).hexdigest(),'integrity':'passed'}
archive.with_suffix('.json').write_text(json.dumps(meta,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(meta,ensure_ascii=False))
