
---
date: 2016-3-02 15:30:16 
tags: [js,markdown,hexo]
title: 如何搭建github下得二级hexo博客
---
学前端这么久了，以前一直没有好的想法，现在学习了hexo和markdown后，终于决定开始搭建个人博客。既然开始，就一定要坚持下去！！第一篇就写环境搭建吧。

### 作者
hexo出自台湾大学生tommy351之手，是一个基于Node.js的静态博客程序，其编译上百篇文字只需要几秒。hexo生成的静态网页可以直接放到GitHub Pages，BAE，SAE等平台上。先看看tommy是如何吐槽Octopress的 →＿→ Hexo颯爽登場。

> * 如果你对默认配置满意，只需几个命令便可秒搭一个hexo。
* 如果你跟我一样喜欢折腾下，30分钟也足够个性化。
* 如果你过于喜欢折腾，可以折腾个把星期，尽情的玩。

搭建过程你或许觉得有那么点小繁琐，但一旦搭建完成，写文章是极简单，极舒服的。
只需要几个简单命令，你就可以完成一切。
``` bash
hexo n #写文章
hexo g #生成
hexo d #部署 # 可与hexo g合并为 hexo d -g
```
下面逐步介绍，进入正题。

<!--more-->

### 环境搭建
1.node.js下载安装，百度即可。
2.github账号一枚，并安装好github的Desktop这个软件。
3.创建一个项目，为你的github用户名+“.github.io”，这是每个github账户有的个人静态网站，然后用Desktop克隆下这个项目，下载到本地。
环境这样就搭建好了。

### 初始化本地hexo
1.安装：在终端输入
``` bash
npm install -g hexo
```
2.初始化
终端里找到desktop下载的项目，在里面新建一个blog文件夹，这样做是为了把博客建在二级目录。
``` bash
hexo init
```
3.修改blog/_config.yml文件里的root这一项，改为“/blog”。注意，以后换主题时要注意也要修改“/blog/themes/你的主题名/_config.yml”
同时修改public_dir为你的blog文件夹的绝对路径，我的是这样
``` bash
public_dir: /Users/lanou/Desktop/wangjian88.github.io/blog
```

4.生成静态页面
还是终端在在项目那一级执行
``` bash
hexo g
hexo s
```
浏览器输入[http://localhost:4000/blog](http://localhost:4000/blog)就可以本地看到效果。

5.新建博客文章
终端还要在你项目的那一级，执行
``` bash
$ hexo new "文章名"
```
会新建一个“文章名.md”的文件，在了解markdown语法的基础上直接书写即可，写完执行4那步，md会自动生成对应的html文件。

### 上传线上
既然是博客，那就要放在网上供人传阅评论。上传也非常简单，只要打开desktop，把你的项目更新一下，会自动把本地的个人博客同步到网上。
这时候“你的用户名.github.io/blog”这个网址就是你的在线博客地址。

More info: [Writing](https://hexo.io/docs/writing.html)

### 文章详情

``` bash
title: postName #文章页面上的显示名称，可以任意修改，不会出现在URL中
date: 2013-12-02 15:30:16 #文章生成时间，一般不改，当然也可以任意修改
categories: #文章分类目录，可以为空，注意:后面有个空格
tags: #文章标签，可空，多标签请用格式[tag1,tag2,tag3]，注意:后面有个空格
---
这里开始使用markdown格式输入你的正文。
```

More info: [Server](https://hexo.io/docs/server.html)

### Generate static files

``` bash
$ hexo generate
```

More info: [Generating](https://hexo.io/docs/generating.html)

### Deploy to remote sites

``` bash
$ hexo deploy
```

More info: [Deployment](https://hexo.io/docs/deployment.html)
