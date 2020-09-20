---
id: doc6
title: 侧边栏
---

侧边栏会显示在网站的右侧。

## 侧边栏组件

目前侧边栏包含的组件如下：

* 博客信息
* 最新文章
* 搜索
* 最新回复
* 文章分类
* 标签云
* 日历
* 文章归档
* 其它功能
* 友情链接

`侧边栏组件` 输入框可以设置需要显示在侧边栏的组件。组件名称之间用逗号分隔，末尾不需要逗号。组件会根据 `侧边栏组件` 输入框中的组件名称的顺序来排序。

## 组件说明

下面是组件的图片和说明：

### 博客信息

博客信息组件可以显示博主信息、文章数量、评论数量、网站运行天数。

要显示正确的博客信息您还需要填写 博主头像地址、博主昵称、博主简介、站点创建时间。

如下：

![MWordStar博客信息设置](https://www.misterma.com/img/MWordStar%E5%8D%9A%E5%AE%A2%E4%BF%A1%E6%81%AF%E8%AE%BE%E7%BD%AE.jpeg)

博客信息效果如下：

![MWordStar博客信息效果](https://www.misterma.com/img/MWordStar%E5%8D%9A%E5%AE%A2%E4%BF%A1%E6%81%AF%E6%95%88%E6%9E%9C.jpeg)

### 最新文章

显示最新发布的文章。

如果要调整最新文章组件的文章数量可以在 Typecho `阅读设置` 中设置 `文章列表数目`。

截图：

![MWordStar侧边栏最新文章](https://www.misterma.com/img/MWordStar%E4%BE%A7%E8%BE%B9%E6%A0%8F%E6%9C%80%E6%96%B0%E6%96%87%E7%AB%A0.jpg)

### 搜索

截图如下：

![MWordStar侧边栏搜索](https://www.misterma.com/img/MWordStar%E4%BE%A7%E8%BE%B9%E6%A0%8F%E6%90%9C%E7%B4%A2.jpg)

搜索按钮的颜色使用的是主题配色设置的颜色。

### 最新回复

最新回复会显示最新的 10 条评论和回复，点击可以跳转到相关文章。

截图如下：

![MWordStar侧边栏最新回复](https://www.misterma.com/img/MWordStar%E4%BE%A7%E8%BE%B9%E6%A0%8F%E6%9C%80%E6%96%B0%E5%9B%9E%E5%A4%8D.jpg)

### 文章分类

显示分类和文章数量，鼠标移入会显示分类说明。

截图图下：

![MWordStar侧边栏分类](https://www.misterma.com/img/MWordStar%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%88%86%E7%B1%BB.jpg)

### 标签云

显示所有标签，点击可以查看该标签下的文章。

截图如下：

![MWordStar侧边栏标签云](https://www.misterma.com/img/MWordStar%E4%BE%A7%E8%BE%B9%E6%A0%8F%E6%A0%87%E7%AD%BE%E4%BA%91.jpg)

### 日历

这个日历组件的功能和 WordPress 的日历组件差不多，默认显示当前月份的日历，在归档页面会显示归档月份的日历。有文章的日期会高亮显示，点击可以查看当日发布的文章。

截图如下：

![MWordStar侧边栏日历](https://www.misterma.com/img/MWordStar%E4%BE%A7%E8%BE%B9%E6%A0%8F%E6%97%A5%E5%8E%86.jpg)

### 文章归档

显示按月份的文章归档。

截图如下：

![MWordstar侧边栏文章归档](https://www.misterma.com/img/MWordStar%E4%B8%BB%E9%A2%98%E4%BE%A7%E8%BE%B9%E6%A0%8F%E6%96%87%E7%AB%A0%E5%BD%92%E6%A1%A3%E6%88%AA%E5%9B%BE.jpeg)

如果您的文章归档月份较多，可以在 `侧边栏文章归档月份数量` 中限制显示的月份数量。如果您启用了独立页面的文章归档的话，还可以在 `文章归档页面地址` 中输入独立页文章归档的地址，输入后在文章归档下方会显示 `查看更多` 的链接，点击就可以跳转到独立页文章归档。

截图如下：

![MWordStar限制月份数量的侧边栏文章归档](https://www.misterma.com/img/MWordStar%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%BD%92%E6%A1%A32.jpg)

### 其它功能

其它功能组件包含了 登录、文章RSS、评论RSS。

截图如下：

![MWordStar侧边栏其它功能](https://www.misterma.com/img/MWordStar%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%85%B6%E5%AE%83%E5%8A%9F%E8%83%BD.jpg)

您也可以隐藏登录入口，隐藏后只能通过 `域名/admin/login.php` 进入登录页面。

### 友情链接

友情链接组件可以显示首页友情链接和全站友情链接。

友情链接组件的外观样式和其它功能组件是差不多的，这里就不贴截图了。

## 侧边栏显示（移动设备）

在移动设备上，侧边栏会显示在文章的下方。您可以指定哪些组件需要在移动设备上显示，移动设备的隐藏组件不会影响 PC板的显示。隐藏只是看不到组件，HTML 代码还是在的。

这里的移动设备是指屏幕分辨率宽度在 768px 或 768px 以下的设备。

下面是可以设置的组件：

![MWordStar侧边栏移动设备显示设置](https://www.misterma.com/img/MWordStar%E4%BE%A7%E8%BE%B9%E6%A0%8F%E7%A7%BB%E5%8A%A8%E8%AE%BE%E5%A4%87%E6%98%BE%E7%A4%BA.jpg)