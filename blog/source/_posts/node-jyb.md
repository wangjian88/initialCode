---
title: node.js综合-实现全栈-上
date: 2016-11-22 22:18:44
tags: [node,js]
---
### node.js是什么？
简单的说 Node.js 就是运行在服务端的 JavaScript。
Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。
Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。

#### 第一个Node.js程序：Hello World！
 创建文件，文件名为 helloworld.js，内容为“console.log(hellow world)” 并通过 node命令来执行：
```bash
node helloworld.js
```
结果如图
<div align=center>
![](http://www.runoob.com/wp-content/uploads/2014/03/nodejs-gif1.gif)
</div>
<!--more-->
#### 第二个Node.js程序：Hello World！浏览器实现
在我们创建 Node.js 第一个 "Hello, World!" 应用前，让我们先了解下 Node.js 应用是由哪几部分组成的：
> 引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块。
> 创建服务器：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。
> 接收请求与响应请求 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。

```bash
var http = require('http');
请求http模块（请先了解模块话概念）
http.createServer(function (request, response) {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// 发送响应数据 "Hello World"
	response.end('Hello World\n');
}).listen(8888);
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
```
执行代码如图
<div align=center>
![](http://www.runoob.com/wp-content/uploads/2014/03/node-hello.gif)
</div>
这样就简单实现了服务器加客户端输出“hellow world”，注意两个参数，request是请求信息，response返回的响应，可由以下代码实现路由分发

```bash
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	//对应地址“127.0.0.1：8888/”(/可省略)
	if(req.url == "/"){
		response.end('我是首页');	
	}
	//对应地址“127.0.0.1：8888/page1”(/可省略)
	if(req.url == "page1"){
		response.end('我是page1');	
	}
	//对应地址“127.0.0.1：8888/page2”(/可省略)
	if(req.url == "/"){
		response.end('我是page2');	
	}
}).listen(8888);
```
原生node还有很多模块，这里就不一一赘述了。进入项目搭建~~

### EXPRESS
> Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。
使用 Express 可以快速地搭建一个完整功能的网站，它有一套健壮的特性，可用于开发单页、多页和混合Web应用。

> 必须了解模板的概念。服务器响应请求，拿到数据，和模板结合渲染html返回请求。

#### 安装
```bash
1.$ npm install -g express-generator  //全局安装express
2.创建一个项目，终端输入
$ express -e -c less blog //这里介绍两个参数,第一个-e代表使用ejs模板，不写默认jade，-c后跟你要选择的css模板，不写默认为css
$ cd blog && npm install
```
此时命令行中会显示 blog Express server listening on port 3000 +0ms ，在浏览器里访问  localhost:3000 ，运行成功。

#### 工程结构

我们回头看看生成的工程目录里面都有什么，打开我们的 blog 文件夹，里面如图所示：
<div align=center>
![](http://img2.tuicool.com/BvmYZri.jpg)
</div>
		app.js：启动文件，或者说入口文件

		package.json：存储着工程的信息及模块依赖，当在 dependencies 中添加依赖的模块时，运行 npm install ，npm 会检查当前目录下的 package.json，并自动安装所有指定的模块

		node_modules：存放 package.json 中安装的模块，当你在 package.json 添加依赖的模块并安装后，存放在这个文件夹下

		public：存放 image、css、js 等文件

		routes：存放路由文件

		views：存放视图文件或者说模版文件

		bin：存放可执行文件

		打开app.js,让我们看看里面究竟有什么:

这里我们通过require()加载了express、path 等模块,以及 routes 文件夹下的index. js和 users.js 路由文件。 下面来讲解每行代码的含义。
```bash
(1) var app = express()：生成一个express实例 app。

(2)app.set('views', path.join(__dirname, 'views’))：设置 views 文件夹为存放视图文件的目录, 即存放模板文件的地方,__dirname 为全局变量,存储当前正在执行的脚本所在的目录。

(3)app.set('view engine', 'ejs’)：设置视图模板引擎为 ejs。

(4)app.use(favicon(__dirname + '/public/favicon.ico’))：设置/public/favicon.ico为favicon图标。

(5)app.use(logger('dev’))：加载日志中间件。

(6)app.use(bodyParser.json())：加载解析json的中间件。

(7)app.use(bodyParser.urlencoded({ extended: false }))：加载解析urlencoded请求体的中间件。

(8)app.use(cookieParser())：加载解析cookie的中间件。

(9)app.use(express.static(path.join(__dirname, 'public')))：设置public文件夹为存放静态文件的目录。

(10)app.use('/', routes);和app.use('/users', users)：路由控制器。

(11)

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
捕获404错误，并转发到错误处理器。(12)

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
开发环境下的错误处理器，将错误信息渲染error模版并显示到浏览器中。(13)

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
生产环境下的错误处理器，将错误信息渲染error模版并显示到浏览器中。(14)module.exports = app ：导出app实例供其他模块调用。
```
我们再看 bin/www 文件：

```bash
#!/usr/bin/env node
var debug = require('debug')('blog');
var app = require('../app');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
(1)#!/usr/bin/env node：表明是 node 可执行文件。

(2)var debug = require('debug')('blog’)：引入debug模块，打印调试日志。

(3)var app = require('../app’)：引入我们上面导出的app实例。

(4)app.set('port', process.env.PORT || 3000)：设置端口号。

(5)

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
启动工程并监听3000端口，成功后打印 Express server listening on port 3000。
```
我们再看 routes/index.js 文件：

```bash
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
```

生成一个路由实例用来捕获访问主页的GET请求，导出这个路由并在app.js中通过app.use('/', routes); 加载。这样，当访问主页时，就会调用res.render('index', { title: 'Express' });渲染views/index.ejs模版并显示到浏览器中。

我们再看看 views/index.ejs 文件：
```bash
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
  </body>
</html>
```
在渲染模板时我们传入了一个变量 title 值为 express 字符串，模板引擎会将所有 <%= title %> 替换为 express ，然后将渲染后生成的html显示到浏览器中，如上图所示。

在这一小节我们学习了如何创建一个工程并启动它，了解了工程的大体结构和运作流程，下一小节我们将学习 express 的基本使用及路由控制。

### 路由控制

工作原理

```bash
routes/index.js 中有以下代码：

router.get('/', function(req, res){
  res.render('index', { title: 'Express' });
});
```
这段代码的意思是当访问主页时，调用 ejs 模板引擎，来渲染 index.ejs 模版文件（即将 title 变量全部替换为字符串 Express），生成静态页面并显示在浏览器中。

我们来作一些修改，以上代码实现了路由的功能，我们当然可以不要 routes/index.js 文件，把实现路由功能的代码都放在 app.js 里，但随着时间的推移 app.js 会变得臃肿难以维护，这也违背了代码模块化的思想，所以我们把实现路由功能的代码都放在 routes/index.js 里。官方给出的写法是在 app.js 中实现了简单的路由分配，然后再去 index.js 中找到对应的路由函数，最终实现路由功能。我们不妨把路由控制器和实现路由功能的函数都放到 index.js 里，app.js 中只有一个总的路由接口。

最终将 app.js 修改为：
```bash
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

routes(app);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
修改 index.js 如下：

module.exports = function(app) {
  app.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
  });
};
```
现在，再运行你的 app，你会发现主页毫无二致。这里我们在 routes/index.js 中通过 module.exports 导出了一个函数接口，在 app.js 中通过  require 加载了 index.js 然后通过 routes(app) 调用了 index.js 导出的函数。

路由规则

express 封装了多种 http 请求方式，我们主要只使用 get 和  post 两种，即  app.get() 和 app.post() 。

app.get() 和  app.post() 的第一个参数都为请求的路径，第二个参数为处理请求的回调函数，回调函数有两个参数分别是 req 和 res，代表请求信息和响应信息 。路径请求及对应的获取路径有以下几种形式：
```bash
req.query

// GET /search?q=tobi+ferret  
req.query.q  
// => "tobi ferret"  

// GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse  
req.query.order  
// => "desc"  

req.query.shoe.color  
// => "blue"  

req.query.shoe.type  
// => "converse"  
req.body

// POST user[name]=tobi&user[email]=tobi@learnboost.com  
req.body.user.name  
// => "tobi"  

req.body.user.email  
// => "tobi@learnboost.com"  

// POST { "name": "tobi" }  
req.body.name  
// => "tobi"  
req.params

// GET /user/tj  
req.params.name  
// => "tj"  

// GET /file/javascripts/jquery.js  
req.params[0]  
// => "javascripts/jquery.js"  
req.param(name)

// ?name=tobi  
req.param('name')  
// => "tobi"  

// POST name=tobi  
req.param('name')  
// => "tobi"  

// /user/tobi for /user/:name   
req.param('name')  
// => "tobi"  
不难看出：
req.query ： 处理 get 请求，获取 get 请求参数
req.params ： 处理 /:xxx 形式的 get 或 post 请求，获取请求参数
req.body ： 处理 post 请求，获取 post 请求体
req.param() ： 处理 get 和 post 请求，但查找优先级由高到低为 req.params→req.body→req.query
路径规则还支持正则表达式，更多请查阅 Express 官方文档 。
```

### MongoDB简介

MongoDB 是一个基于分布式文件存储的 NoSQL（非关系型数据库）的一种，由 C++ 语言编写，旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。MongoDB 支持的数据结构非常松散，是类似 json 的 bjson 格式，因此可以存储比较复杂的数据类型。MongoDB 最大的特点是他支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。

MongoDB 没有关系型数据库中行和表的概念，不过有类似的文档和集合的概念。文档是 MongoDB 最基本的单位，每个文档都会以唯一的 _id 标识，文档的属性为 key/value 的键值对形式，文档内可以嵌套另一个文档，因此可以存储比较复杂的数据类型。集合是许多文档的总和，一个数据库可以有多个集合，一个集合可以有多个文档。

下面是一个 MongoDB 文档的示例：

{ 
  "_id" : ObjectId( "4f7fe8432b4a1077a7c551e8" ),
  "name" : "nswbmw",
  "age" : 22,
  "email" : [ "xxx@126.com", "xxx@gmail.com" ],
  "family" : {
    "mother" : { ... },
    "father" : { ... },
    "sister : {
      "name" : "miaomiao",
      "age" : 27,
      "email" : "xxx@163.com",
      "family" : {
        "mother" : { ... },
        "father" : { ... },
        "brother : { ... },
        "husband" : { ... },
        "son" : { ... }
      }
    }
  }
}
#### 安装
安装 MongoDB 很简单,去 官网 下载对应系统的 MongoDB 压缩包即可。解压后将文件夹重命名为 mongodb
```bash
sudo mkdir -p /data/db
sudo chown -R  “你的$前的名称” /data
cd Users/lanou/Applications/mongodb/bin && ./mongod
```
这样就安装并启动了mongod数据库                



