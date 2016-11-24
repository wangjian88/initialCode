---
title: node.js综合-实现全栈
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








