---
id: doc13
title: 代码高亮
---

代码高亮的样式使用的是 VS2015 的暗色主题，和 Visual Studio Code 的默认主题差不多。目前支持 30 多种语言的代码高亮。

下面是支持代码高亮的语言：

* Apache
* Bash
* C#
* C / C++
* CSS
* CoffeeScript
* Dart
* Dockerfile
* Go
* HTML, XML
* HTTP
* JSON / JSON with Comments
* Java
* JavaScript
* Kotlin
* Less
* Lua
* Makefile
* Markdown
* Matlab
* Nginx
* Objective-C
* PHP
* Perl
* Python
* PowerShell
* Ruby
* Rust
* SCSS
* SQL (Structured Query Language)
* Shell Session
* Swift
* TOML, also INI
* TypeScript
* YAML

使用 Webpack 打包过的版本是不能更改代码高亮的，如果需要更改代码高亮的语言和样式，您需要克隆项目或下载 `Source code`。

更改代码高亮的样式可以上 [https://github.com/highlightjs/highlight.js/tree/master/src/styles](https://github.com/highlightjs/highlight.js/tree/master/src/styles) 下载 `css` 样式，下载完成后复制到主题的 `css` 文件夹，重命名为 `vs2015.css` 替换原来的文件。

如果您需要自己定制代码高亮的语言可以参考 [highlight.js 一个在网页上实现代码高亮的JS库](https://www.misterma.com/archives/548/) 这篇文章，下载后直接替换 js 目录中的 `highlight.pack.js` 。