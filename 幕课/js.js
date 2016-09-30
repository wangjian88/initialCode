$(document).ready(function  () {
	var arr=['url(img/nav-3.jpg) no-repeat','url(img/nav-2.png) no-repeat']
	var num=0;
	var nav=[
	['PHP','Java','Python','C','C++','go','C#'],
	['Andorin','ios','Unite 3D','Coco2d-x'],
	['MySQL',' MongoDB',' Oracle',' SQL Server'],
	['大数据','云计算'],
	['测试','Linux'],
	['Photoshop',' Maya',' Premiere',' ZBrush']
	]
	var timer=null;
	var nav_1=$('.nav-tab').html()
	$('.head-phone').mouseover(function  () {
		$('.head-hide').css('display','block')
	})
	$('.head-phone').mouseout(function  () {
		$('.head-hide').css('display','none')
	})
	$('.nav-list li,.nav-con').mouseover(function  () {
		$('.nav-con').css('display','block')
	})
	$('.nav-list li,.nav-con').mouseout(function  () {
		$('.nav-con').css('display','none')
	})
	$('.nav-list li').mouseover(function  () {
		$('.nav-con').css('background','white url(img/nav-con-'+($(this).index()+1)+'.png) no-repeat right top');
		if ($(this).index()>=1) {
			$('.nav-tab').html('')
			txt='<p>'
			for (i=0;i<nav[$(this).index()-1].length;i++) {
				txt+="<a href='#'>"+nav[$(this).index()-1][i]+'</a>/'
			}
			txt+='</p>'
			$('.nav-tab').html(txt)
		}else{
			$('.nav-tab').html(nav_1)
		}
	})
	$('.tab a').eq(0).css('background','white')

	function tab () {
		num++
		if (num==2) {
			num=0;
		}
		$('.tab-img').animate({opacity:"0.4"},100,function  () {
		$(this).css('background',arr[num])
		$('.tab a').css('background','#ccc')
		$('.tab a').eq(num).css('background','white')
	 }).animate({opacity:"1"},500)
	 }
	timer=setInterval(tab,5000)
	
	$('.tab a').click(function  () {
		clearInterval(timer)
		tab();
		timer=setInterval(tab,5000)
	})
	$('.left,.right').click(function  () {
		clearInterval(timer)
		tab();
		timer=setInterval(tab,5000)
	})
	$('li').mouseover(function  () {
		$(this).children('.hide').animate({top:"25px"})
	})
	$('li').mouseleave(function  () {
		$('li .hide').stop(true,true)
		$(this).children('.hide').animate({top:"85px"})
	})
	$('.p1 a').eq(1).mouseover(function () {
		$('.sao').css('display','block')
	})
	$('.p1 a').eq(1).mouseout(function () {
		$('.sao').css('display','none')
	})
	
})
	