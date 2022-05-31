---
id: doc1
title: 下载和安装
sidebar_label: 下载和安装
---

## 下载

访问 [https://github.com/changbin1997/MWordStar/releases](https://github.com/changbin1997/MWordStar/releases) 选择 `MWordStar-bundle.zip` 下载主题。

如果你无法打开上面的下载地址，也可以访问 [https://pan.baidu.com/s/1uFlFkcEeZsSgNy4OKPm6vw](https://pan.baidu.com/s/1uFlFkcEeZsSgNy4OKPm6vw) 使用百度网盘下载，密码 `bcjh` ，进入博客主图下载文件夹后选择 MWordStar 的最高版本下载。

## 安装

在 Github 的 [Releases](https://github.com/changbin1997/MWordStar/releases) 下载的主题是一个 `zip` 格式的压缩包，把压缩包上传到您的 `Typecho` 目录下的 `usr/themes/` 目录，上传完成后解压。

注意，需要直接解压到 `themes` 目录下，在 `themes` 目录下必须保证有一个 `MWordStar` 目录。

登录 Typecho 的后台管理，进入 `外观`，如果之前没有错误的话就能看到 `MWordStar` ，点击 `启用`。

## 克隆项目

如果您有二次开发的需求可以直接克隆项目，克隆命令是：

```bash
git clone https://github.com/changbin1997/MWordStar.git
```

下载完成后把 `￼￼MWordStar` 目录拷贝到 Typecho 目录下的 `usr/themes/` 目录。

主题的 `style.scss` 文件修改后需要用 [Sass](https://www.misterma.com/archives/713/) 编译为 css 才能使用。

如果您没有二次开发的需求的话，可以直接在 [Releases](https://github.com/changbin1997/MWordStar/releases) 中下载 `MWordStar-bundle.zip` 。`MWordStar-bundle.zip` 是使用 Webpack 打包过的版本，需要加载的静态文件比较少，速度更快。