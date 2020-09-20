---
id: doc11
title: 开发者
---

## 自定义 CSS

通过自定义 CSS 您可以很方便的设置页面样式，自定义 CSS 不会影响网站源代码。

## 自定义 head 区域输出的 HTML

自定义 head 区域的 HTML 会在 `</head>` 之前输出。您可以用来定义网站统计的 JS 或者 自定义 JS。

## 自定义 body 底部输出的 HTML

自定义 body 区域的 HTML 会在 `</footer>` 之后 `</body>` 之前输出。。您可以用来定义网站统计的 JS 或者 自定义 JS。

## 一些实用的 CSS

下面是一些实用的 CSS 代码，您可以在 `自定义 CSS` 使用。

### 评论者头像

评论者头像使用的是圆形头像，如果您需要使用方形头像可以在主题外观设置中的 自定义CSS 中加入如下代码：

```css
.avatar {
  border-radius: 0px !important;
}
```

如果您需要使用圆角方形的头像可以加入如下代码：

```css
.avatar {
  border-radius: 4px !important;
}
```

### 黑白模式

可以在自定义 CSS 中加入：

```css
html {
  filter: grayscale(100%);
}
```

目前黑白模式不支持 IE 浏览器。

### 背景颜色

如果您需要自定义背景颜色可以在自定义 CSS 中加入：

```css
body {
  background-color: pink !important;
}
```

其中 `background-color` 后面的 `pink` 就是颜色，可以使用 `red` 之类的英文颜色名，也可以使用 `#F0F8FF` 之类的十六进制颜色代码，也可以使用 `rgb(255, 255, 255)` 之类的 RGB 颜色代码。

如果您完全不了解 CSS 颜色的话，可以到 [https://www.w3school.com.cn/cssref/css_colornames.asp](https://www.w3school.com.cn/cssref/css_colornames.asp) 查看颜色名和颜色代码。