# 运行与开发

V11.7 为完整入口版：原开始界面 → 红楼卷藏 → 初入荣府三维漫游 / 黛玉葬花。已构建游戏位于根目录 `dist/`，三维页面位于 `dist/jiafu/`。

安装 Node.js 22.12 或更高版本后，双击 `启动潇湘初梦.cmd`，或执行 `npm start`，打开 http://127.0.0.1:4177/ 。运行构建版无需安装依赖。`停止潇湘初梦.cmd` 只停止该启动器记录的游戏进程。直接文件方式适合原篇阅读，三维游戏请使用本地 HTTP 服务。

## 检查与构建

```sh
npm ci
npm run check
npm test
cd jiafu-3d
npm ci
cd ..
npm run check:3d
npm run test:3d
npm run build
```

`npm run build` 构建三维源代码，再同步到根目录 `dist/jiafu/`。开始界面、卷册与第二章为原有 HTML/JS/CSS 源文件，直接编辑根目录 `dist/` 中对应文件；三维源代码在 `jiafu-3d/`。

`npm test` 覆盖两卷六种结局、第二卷94节点和6561条选择路径、跨卷梦笺、旧存档与续读。浏览器检查使用 Playwright，可设置 `JIAFU_PLAYWRIGHT_PACKAGE` 与 `JIAFU_BROWSER_EXECUTABLE`，运行 `node tools/check-unified-browser.cjs`；使用 `JIAFU_UNIFIED_URL` 指向运行中的整合版。

## 章节与存档

`dist/chapters.js` 配置卷名、简介和完成状态；`dist/scroll-library.js` 保留拿取、松带、封皮翻折和约2.2秒的最后展卷。第一卷主按钮进入三维，原篇阅读入口继续支持旧梦笺；第二卷与未完成卷宗保留。

阅读进度保存在 `xiaoxiang.v1.*`，三维进度保存在 `xiaoxiang.jiafu3d.v1`，最近游玩模式单独记录。返回卷册和切换章节不会互相覆盖。更换域名、端口或浏览器时不会自动迁移存档。

## 静态部署

将根目录 `dist/` 的全部内容部署到静态网站根目录，包括 `jiafu/` 子目录。保留相对路径，即可从同一网址进入两卷故事和三维场景。完整地图模型沿用V11.5模型包，运行游戏不需要模型包。
