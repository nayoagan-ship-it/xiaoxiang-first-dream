# 运行与开发

《潇湘初梦 · 林黛玉进贾府》是面向电脑浏览器的中文第一人称视觉小说。
运行文件位于 `dist/`，这里的 JavaScript、HTML 和 CSS 本身就是可编辑源码，不依赖打包器。

## 开始游戏

可直接打开根目录的 `开始游戏.html`，或 `dist/index.html`。
推荐使用 Node.js 本地 HTTP 服务，让浏览器存档有稳定的站点地址：

```sh
node server.mjs
```

也可以运行 `npm start`。然后打开 <http://127.0.0.1:4173>。
运行游戏与本地服务器无需安装 npm 依赖；开发检查建议 Node.js 20 或更新版本。
可通过 `PORT` 环境变量修改端口，服务器只监听本机地址。

## 操作

- 点击对话、空格或回车：显示整句或继续。
- 点击选项，或按数字 1、2、3：作出选择。
- H：历史回看；A：自动阅读；Esc：关闭弹窗或返回开始界面。
- 自动存档与三份手动存档保存在当前浏览器的 localStorage，清除站点数据会删除存档。
- 场景动效和背景乐默认开启，首次点击或按键后开始播放；阅读设置会保存。
- 五幕故事、八处选择、三种心境结局。剧情分支改变答话、内心独白及最终心境。

建议使用电脑端 Chrome、Edge 或 Firefox，窗口至少 980 × 660。
本版本保留 2026-10-30 更新的单人创作团队页。

## 编辑入口

| 文件 | 用途 |
| --- | --- |
| `dist/story.js` | 剧情、选择、分数与结局判定 |
| `dist/app.js` | 阅读、存读档、菜单、音乐及设置 |
| `dist/style.css` | 游戏舞台、人物与基础样式 |
| `dist/ui.css` | 菜单、对话框及纸笺界面 |
| `dist/team.css` | 创作团队页面样式 |
| `dist/assets/` | 场景、立绘、署名头像、图标与配乐 |
| `ART-PROMPTS.md` | 场景和人物插画的生成提示词 |
| `tools/compose_bgm.py` | 原创程序配乐的合成脚本 |

修改这些文件后刷新即可，不需要运行构建命令。

## 验证

```sh
npm ci --ignore-scripts
npm run check
npm test
```

开发依赖仅用于 jsdom 行为测试，并锁定在 package-lock.json。
现有测试覆盖三种结局、八处选择、文本一致性、手动存读档、覆盖存档取消、刷新续玩、回看、字号和重开保留手动存档。
jsdom 检查不等同于真实浏览器排版、声音试听和操作手感验证。

## 重新合成配乐（可选）

当前游戏背景乐由 `dist/app.js` 使用 Web Audio 实时合成，普通使用不需要 Python 或 FFmpeg。
项目还附带一条程序合成的 MP3 配乐素材，当前播放器没有引用它。
需要修改配乐时，安装 Python、NumPy 和 FFmpeg，然后运行：

```sh
python -m pip install numpy
python tools/compose_bgm.py
```

FFmpeg 默认从 PATH 查找，也可以通过 `FFMPEG_PATH` 指定可执行文件路径。
脚本会更新 `dist/assets/audio/bamboo-shadows.mp3`；中间 WAV 放在被 Git 忽略的 `artifacts/audio-generation/`。

## 静态部署

将 `dist/` 内的内容放到静态网站的根目录即可，保持资源相对路径不变。
本仓库不包含原托管服务的账号配置、部署记录和本地浏览器存档。
