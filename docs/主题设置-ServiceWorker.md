---
id: 主题设置-ServiceWorker
title: Service Worker
---

## Service Worker 是什么

Service Worker 是浏览器提供的一种网页缓存技术，开启后主题会把部分 JavaScript 和 CSS 文件缓存到访问者的浏览器中。访问者再次打开您的网站时，这些文件可以直接从浏览器缓存读取，不需要重新下载，可以加快页面加载速度，也能减少服务器的流量消耗。

主题会缓存的文件包括：

1. 打包生成的 JS 文件（文件名类似 `bundle-1788091452.js`）
2. 打包生成的 CSS 文件（文件名类似 `style-1788156990.css`）
3. 代码高亮 JS（`highlight.pack.js`，只有在文章包含代码块时才会加载）
4. 文件名中的数字是打包时生成的时间戳，主题更新打包后数字会变化，Service Worker 会自动删除旧文件的缓存，然后缓存新文件，不需要手动清理。

## 开启前的准备

Service Worker 默认是 禁用 的，在开启之前，您需要先手动把 `sw.js` 文件放到网站的根目录，操作步骤如下：

1. 打开您网站空间（服务器或虚拟主机）中的主题目录，路径一般是 `usr/themes/MWordStar` 。
2. 进入主题目录中的 `assets/js` 目录，找到 `sw.js` 文件。
3. 把 `sw.js` 复制一份，上传到网站的根目录，也就是 index.php 文件所在的目录。

为什么必须放到网站根目录？因为 Service Worker 只能控制 sw.js 所在目录范围内的页面，放在主题目录中是无法拦截网站页面请求的。

Service Worker 只有在 HTTPS 的网站中才能使用，本地搭建的 localhost 环境除外。如果您的网站不支持 HTTPS，请保持 禁用 。

## 开启和验证

1. 完成 开启前的准备 后，在主题设置的 Service Worker 选择 启用，保存设置。
2. 打开网站首页，按下键盘的 F12 键打开浏览器开发者工具，切换到 Application（应用程序）选项卡。
3. 在左侧的 Service Workers 中可以看到一个状态为 activated and running 的 Service Worker，说明注册成功。
4. 在左侧的 Cache Storage 中可以看到被缓存的文件列表。

如果没有上传 sw.js 就开启了 Service Worker，网站功能不会受影响，只是无法注册 Service Worker，缓存也不会生效。