/**获取class**/
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


/****放大镜     王健   ****/
/**封装函数获取obj距离、屏幕左，上的距离**/
function getLeft (obj) {
	var ileft=0
	while(obj){
		ileft+=obj.offsetLeft
		obj=obj.offsetParent
	}
	return ileft
}
function getTop (obj) {
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var itop=0
	while(obj){
		itop+=obj.offsetTop
		obj=obj.offsetParent
	}
	return itop-scrollTop
}
var odiv=getsByClass('ppr_tu')[0];
var omove=getsByClass('enlarge_box')[0];
var ohide=getsByClass('enlarge_img_div')[0];
var oimg=document.querySelector('#enlarge_img_img')
document.onmousemove=function  (ev) {
	var ev=ev||event;
	/*检测是否进入图片区*/
	if (ev.clientX<getLeft(odiv)||ev.clientX>getLeft(odiv)+odiv.offsetWidth||ev.clientY<getTop(odiv)||ev.clientY>getTop(odiv)+odiv.offsetHeight) {
		omove.style.display='none';
		ohide.style.display='none';
		return;
	}else{
		omove.style.display='block';
		ohide.style.display='block';
		omove.style.cursor='move';
		var x=ev.clientX-getLeft(odiv)
		var y=ev.clientY-getTop(odiv)
		if (ev.clientX-getLeft(odiv)-115<0) {
			x=0;
		}else{x-=115}
		if (ev.clientX>odiv.offsetWidth+getLeft(odiv)-115) {
			x=odiv.offsetWidth-230;
		}
		if (ev.clientY-getTop(odiv)-115<0) {
			y=0;
		}else{y-=115}
		if (ev.clientY>odiv.offsetHeight+getTop(odiv)-140){
			y=odiv.offsetHeight-250;
		}
		omove.style.left=x+'px'
		omove.style.top=y+'px'
		oimg.style.left=-1.7*x+'px'
		oimg.style.top=-2*y+'px'
	}
				
}
var goods_details_tab=getsByClass('goods_details_tab')
var goods_details=getsByClass('goods_details')
goods_details_tab[0].style.backgroundColor="#029401";
goods_details_tab[0].style.border="1px solid #ccc";
goods_details_tab[0].style.borderBottom="none";
for (i=0;i<goods_details_tab.length;i++) {
	goods_details_tab[i].index=i
	goods_details[1].style.display='none';
	goods_details[2].style.display='none'
	goods_details_tab[i].onclick=function  () {
		for (var j=0;j<goods_details_tab.length;j++) {
			goods_details_tab[j].style.backgroundColor='transparent'
			goods_details_tab[j].style.color='black'
			goods_details[j].style.display='none'
		}
		// if (this.index==0) {
			this.style.color='white'
			this.style.backgroundColor="#029401";
			goods_details[this.index].style.display='block'
		// }
		this.style.backgroundColor="#029401";
		goods_details[this.index].style.display='block'
	}
}