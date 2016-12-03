---
title: 精选面试题
date: 2016-7-12 23:04:39
tags: [面试题,js]
---
### 1.写出3个使用this的典型应用
```bash
事件： 如onclick  this->发生事件的对象;
构造函数          this->new 出来的object;
call/apply        改变this;
```
--------------------------------------------------------------------------------

### 2.javascript面向对象中继承实现
```bash
function Person(name){
        this.name = name;
}

Person.prototype.showName = function(){
        alert(this.name);
}

function Worker(name, job){
        Person.apply(this,arguments)
        this.job = job;
}
for(var i in Person.prototype){
        Worker.prototype = Person.prototype;
}
new Worker('sl', 'coders').showName()
```
<!--more-->

--------------------------------------------------------------------------------
### 3.如何深度克隆
```bash
function deepClone (obj) {
		if (typeof obj != 'object') {
			return obj;
		}
			var newObj={};
		for (var attr in obj) {
			newObj[attr]=deepClone(obj[attr])
		}
			return newObj;
	}
```
--------------------------------------------------------------------------------

### 4.你能描述一下渐进增强和优雅降级之间的不同吗?
```bash
常用两种策略：要么优雅降级（graceful degradation，一开始就构建站点的完整功能，然后针对浏览器测试和修复），要么渐进增强（progressive enhancement，一开始只构建站点的最少特性，然后不断针对各浏览器追加功能。
```
--------------------------------------------------------------------------------

### 5.请尽可能详尽的解释AJAX的工作原理。
```bash
创建ajax对象（XMLHttpRequest/ActiveXObject(Microsoft.XMLHttp)）
判断数据传输方式(GET/POST)
打开链接 open()
发送 send()
当ajax对象完成第四步（onreadystatechange）数据接收完成，判断http响应状态（status）200-300之间或者304（缓存）执行回调函数
```
--------------------------------------------------------------------------------
### 6.网页中实现一个计算当年还剩多少时间的倒数计时程序
```bash
var oDate = new Date();
var oYear = oDate.getFullYear();

var oNewDate = new Date();
oNewDate.setFullYear(oYear, 11, 31, 23, 59, 59);
var iTime = oNewDate.getTime()-oDate.getTime();

var iS = iTime/1000;
var iM = oNewDate.getMonth()-oDate.getMonth();
var iDate =iS
```
--------------------------------------------------------------------------------
### 7.求y和z的值是多少？
```bash
<script type="text/javascript">
var x = 1;
var y = 0;
var z = 0;
function add(n){n=n+1;}
y = add(x);
function add(n){n=n+3;}
z = add(x);
</script>
都为undefined，因为没有返回值。
```
--------------------------------------------------------------------------------
### 8.form中的input可以设置为readonly和disable，请问2者有什么区别？
```bash
readonly不可编辑，但可以选择和复制；值可以传递到后台
disabled不能编辑，不能复制，不能选择；值不可以传递到后台
```
--------------------------------------------------------------------------------
```bash
function Foo() {
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}

//请写出以下输出结果：
Foo.getName();  2;
getName();	4;
Foo().getName();1
getName();1
new Foo.getName();2
new Foo().getName();3
new new Foo().getName();3
```
--------------------------------------------------------------------------------
```bash
var foo = {
    bar: function() { return this.baz; },
    baz: 1
};

(function(){
    return typeof arguments[0]();//"undefined"
})(foo.bar);
这里你可能会误以为最终结果是number。向函数中传递参数可以看作是一种赋值，所以arguments[0]得到是是真正的bar函数的值，而不是foo.bar这个引用，那么自然this也就不会指向foo，而是window了。
```
--------------------------------------------------------------------------------
```bash
var foo = {
    bar: function(){ return this.baz; },
    baz: 1
}
typeof (f = foo.bar)();//"undefined"
这和上一题是一样的问题，(f = foo.bar)返回的就是bar的值，而不是其引用，那么this也就指的不是foo了。
```
--------------------------------------------------------------------------------
```bash
var x = 1;
if (function f(){}) {
    x += typeof f;
}
x;//"1undefined"
这个问题的关键点，我们在问题二中谈到过，function expression中的函数名f是不能在函数体外部访问的
```
--------------------------------------------------------------------------------
说说你对语义化的理解？
1，去掉或者丢失样式的时候能够让页面呈现出清晰的结构

2，有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；

3，方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；

4，便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。
--------------------------------------------------------------------------------
```bash
说说你对闭包的理解
使用闭包主要是为了设计私有的方法和变量。闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。在js中，函数即闭包，只有函数才会产生作用域的概念
闭包有三个特性：
1.函数嵌套函数
2.函数内部可以引用外部的参数和变量
3.参数和变量不会被垃圾回收机制回收
```
--------------------------------------------------------------------------------
```bash
jquery检查元素存在性
javascript检查元素存在性：
即使这个元素被删除了，也不担心javascript代码报错；
jquery检查元素存在性：
代码如下：
if(!document.getElementById("preview")) return false;
 
 
jquery $（“#preview”）获取的永远是对象，即使网页上没有此元素。
不能使用以下代码：
if($("#preview"){
//do something
}
因此要用jquery检查某个元素在网页上是否存在时，应该根据获取到元素的长度来判断。
代码如下：
if($("#preview").length>0){
//do something
}
```
--------------------------------------------------------------------------------
```bash
在js中，经常会遇到在函数里调用其它函数的情况，这时候会有 fn() 这种调用方式，还有一种是 return fn() 这种调用方式，一些初学者经常会一脸萌逼地被这两种方式给绕晕了。这里用一个优雅的面试题来分析一下两种方式的不同之处。
var i = 0;
function fn(){
    i++;
    if(i < 10){
        fn();
    }else{
        return i;
    }
}
var result = fn();
console.log(result);
这是一道隐藏了坑的面试题，看似很简单，大部分人可能想都不想就答出了10。而实际上运行可知打印出来的是 undefined。这道陷阱题很直观的体现出了前面所说的问题，当我们将执行fn的那一行修改为：
var i = 0;
function fn(){
    i++;
    if(i < 10){
        return fn();
    }else{
        return i;
    }
}
var result = fn();
console.log(result);
这时，会发现打印出来的结果终于不负众望的是 10 了。
为什么这里加不加return区别会这么大？
这里的主要原因很简单，JavaScript的函数都是有默认返回值的，如果函数结尾不写return，会默认返回undefined，这就是为什么在chrome的console控制台里，写代码经常下面会出现一行undefined的原因。
再仔细看看这个例子，当i自增到9的时候，也就是倒数第二次递归调用fn的那一次，如果没有return，这一次执行完fn，会默认return undefined，而不会继续下一次递归了。当加上了 return，在这里则会继续最后一次递归，即i=10的时候，跳入else里面返回得到正确的10。
```
--------------------------------------------------------------------------------
```bash
Java 中的instanceof 运算符是用来在运行时指出对象是否是特定类的一个实例。instanceof通过返回一个布尔值来指出，这个对象是否是这个特定类或者是它的子类的一个实例。
 用法：
result = object instanceof class
参数：
Result：布尔类型。
Object：必选项。任意对象表达式。
Class：必选项。任意已定义的对象类。
说明：
如果 object 是 class 的一个实例，则 instanceof 运算符返回 true。如果 object 不是指定类的一个实例，或者 object 是 null，则返回 false。
```
--------------------------------------------------------------------------------

