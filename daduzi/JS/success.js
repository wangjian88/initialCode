// 封装的获取class的函数
function getsByClass (sClass,oParent) {
	   if (!document.getElementsByClassName) {
	    var aElist=(oParent||document).getElementsByTagName('*');
	    var arrResult=[];
	    var re=new RegExp('\\b'+sClass+'\\b','i')
	    for (var i=0;i<aElist.length;i++) {
	     if (re.test(aElist[i].className)) {
	      arrResult.push(aElist[i])
	     }
	    }
	    return arrResult;
	   }else{
	    return (oParent||document).getElementsByClassName(sClass)
	   }
  }

/****** 产品展示 赵兴籽 *********/
/***修改  王健***/ 
var product=getsByClass("product-body")[0];
var span = product.getElementsByTagName("ul")[0]
var pop = product.getElementsByTagName("ol")[0];
var square=getsByClass("square",product)[0];
var strul="";
var Str1="";
var Str="";
for(var i=0;i<6;i++){
	Str1+='<div class="box">'+
			'<a href="goodsDetails.html">'+									
			'<div class="smallbox"></div></a>'+
			'<span>户外垃圾桶果皮</span></div>';
}
var Str1='<li>'+Str1+'</li>';

for(var i=0;i<15;i++){
	Str +=Str1;
} 
for(var i=0;i<15;i++){
	strul +='<li><div class="square wrap"></div>'+
			'<span><a href="#">不锈钢垃圾桶</a></span>'+
			'<div class="underline"></div></li>';
}
pop.innerHTML=Str;
span.innerHTML=strul;

var rot =span.getElementsByTagName("li");
var pic = pop.getElementsByTagName("li");
var color=span.getElementsByTagName("a");
var square=getsByClass("square",product);
var length1=rot.length;
var underLine =span.getElementsByTagName("div");
underLine[2*length1-1].style.background="transparent";
for(var i=0;i<length1;i++){
	if(2*i<length1){
		rot[2*i].style.height="44px";
	}
	 rot[i].index=i;
	 color[i].index=i;
	//  rot[i].onmouseover=function(){
	//  	for(var j=0;j<length1;j++){
	//  		color[j].style.color="";
	//  		pic[j].style.display="none";
	//  		square[j].id="";
	//  		pic[j].style.zIndex="0";
	//  	}
	//  	color[this.index].style.color="#029501";
	//  	pic[this.index].style.display="block";
	//  	pic[this.index].style.zIndex="3";
	//  	square[this.index].id="transform";
	//  	that=this
	// 	pic[this.index].onmouseover=function(){
	// 		pic[that.index].style.display='block'
	// 		color[that.index].style.color="#029501";
	// 	 	square[that.index].id="transform";
	// 	}
	// 	product.onmouseleave=function(){
	// 		color[that.index].style.color="";
	//  		pic[that.index].style.display="none";
	//  		square[that.index].id="";
	// 	}
	// }
}

/********  无间轮播  钱建波  **********/
var oPicList = document.getElementById("scrollpic");
var oUl = oPicList.getElementsByTagName("ul")[0];
var aLi = oUl.getElementsByTagName("li");
var aPrev = document.getElementById("prev");
var aNext = document.getElementById("next");
aPrev.style.border="1px solid red"
aNext.style.border="1px solid red"

var  html="";
for( var i=0;i<5;i++){
	html +='<li><a href="#"><img src="../images/banner_1.jpg"/></a></li>';
}
oUl.innerHTML = html;
oUl.innerHTML=oUl.innerHTML + oUl.innerHTML;
oUl.style.width = (aLi[0].offsetWidth+10) * aLi.length + "px";
var speed = 1;


//控制滚动
function movePic(){
	if(oUl.offsetLeft<=-oUl.offsetWidth/2){
		oUl.style.left = 0;
	}
	if(oUl.offsetLeft>0){
		oUl.style.left = -oUl.offsetWidth/2+"px";
	}
	oUl.style.left = oUl.offsetLeft + speed +"px";
}
var timer = setInterval(movePic,10);


//鼠标操作 暂停/滚动
oUl.onmouseover = function(){
	clearInterval(timer);
}
oUl.onmouseout = function(){
	timer = setInterval(movePic,10);
}


//控制图片左右滚动
aPrev.onmouseover=function(){
	speed=1;
}
aNext.onmouseover=function(){
	speed=-1;
 }

/***   底页/页码选择    张南南 *****/ 
//获取前后按钮
var firstPage  = getsByClass("firstPage")[0];
var lastPage   = getsByClass("lastPage")[0];
var prePage    = getsByClass("prePage")[0];
var nextPage   = getsByClass("nextPage")[0];
//获取输入页码/跳转页码
var selectPage = getsByClass("selectPage")[0];
var jump       = getsByClass("jump")[0];
//获取页数
var pagination = getsByClass("pagination")[0];
var page_box   = pagination.getElementsByTagName("ul")[0];
var pages 	   = pagination.getElementsByTagName("li");
//获取需跳转的页数
var selectPage = getsByClass("selectPage")[0];
var ipt 	   = selectPage.getElementsByTagName("input")[0];
var length   = pages.length;

//每一页码点击
var n=0;
for(var i=0; i<length; i++){
	pages[i].index = i;
	pages[i].onclick =function(){
		colorReverse(this);
		n= this.index;
		addRemove();
		pageMove();
	}
}
//首页尾页点击
firstPage.onclick =function(){
	n = 0;
	addRemove();
	pageMove();
}
lastPage.onclick =function(){
	n = length-1;
	addRemove();
	pageMove();
}

//上一页 ，下一页是否有边框判断
preNext();
function preNext(){
	if( n ==0 ){
		prePage.className="prePage active";
	}else if(n === length-1){
		nextPage.className="nextPage active";
	}else{
		prePage.className="prePage";
		nextPage.className="nextPage";
	}
}
//上一页 ，下一页点击换页
prePage.onclick=function(){
	n--;
	if( n<0){
		n= 0;
	}
	addRemove();
	preNext();
	pageMove();
}
nextPage.onclick=function(){
	n++;
	if( n>length-1){
		n= length-1;
	}
	addRemove();
	preNext();
	pageMove();
}

// 点击跳转
jump.onclick=function(){
	colorReverse(this);
	n = ipt.value -1;
	addRemove();
	pageMove();
}

//移除/添加 类名
function addRemove(){
	for(var i=0; i<length; i++ ){
		pages[i].className="";
	}
	pages[n].className="active";
}
//点击反色函数
function colorReverse(obj){
	obj.onmousedown =function(){
		this.style.backgroundColor = "lightgrey";
	}
	obj.onmouseup =function(){
		this.style.backgroundColor = "";
	}
}
//页码移动
function pageMove(){
	if(n>1){
		page_box.style.marginLeft = -(n-2)*44+"px";
	}else if(n<=1){
		page_box.style.marginLeft =0;
	}
}
/****** 新闻资讯 邓海强 *********/


var html="";
for(var i=0;i<5;i++){
        html+="<div class='newsdata-4'>"+ 
         	    	   "<div class='img'><a href='success3.html'><img src='../images/banner_1.jpg'></a></div>"+
                     "<div class='wen'>"+
                           "<p class='p1'><a href='success3.html'>【河南】环保垃圾桶就选大肚子桶业，为您省钱</a></p>"+
                           "<p class='p2'>精明的客户，永远都会货比三家！一直都很理解去买东西的时候，会货比三家，其中，平顶山祥和物业"+
                              "就非常好，非常专业的讲解和人员，其中<span><a href=''>【详细】</a></span>"+
                           "</p>"+
                     "</div>"+
         	    "</div>"
}
var str= "<div class='newsdata-1'><div class='newsdata-2'><div class='newsdata-3'><div class='newsdata-33'></div> <div class='newsdata-34'></div> </div><p class='font-color'>成功案例</p>"+
         	    	   "</div>"+"</div>"+html;
getsByClass("newsdata")[0].innerHTML=str;