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
/***********  无缝轮播  钱建波 ********/
var oPicList = document.getElementById("scrollpic");
var oUl = oPicList.getElementsByTagName("ul")[0];
var aLi = oUl.getElementsByTagName("li");
var aPrev = document.getElementById("prev");
var aNext = document.getElementById("next");
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






/***********    联系我们  丁宇     ****************/ 
 //创建和初始化地图函数：
function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
}

//创建地图函数：
function createMap(){
    var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
    var point = new BMap.Point(116.347923,40.040381);//定义一个中心点坐标
    map.centerAndZoom(point,17);//设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map;//将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent(){
    map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
    map.enableScrollWheelZoom();//启用地图滚轮放大缩小
    map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
    map.enableKeyboard();//启用键盘上下左右键移动地图
}


//地图控件添加函数：
function addMapControl(){
    //向地图中添加缩放控件
var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
map.addControl(ctrl_nav);
    //向地图中添加缩略图控件
var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
map.addControl(ctrl_ove);
    //向地图中添加比例尺控件
var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
map.addControl(ctrl_sca);
}
initMap();//创建和初始化地图