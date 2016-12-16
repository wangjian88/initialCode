$(function  () {
//	图片预加载函数
	$.preloadImages = function () {
		for (var i = 0; i < arguments.length; i++) {
			$('<img />').attr('src', arguments [i] );
		}
	};
	$.preloadImages('../img/shouye/duke.jpg','../img/shouye/nyuad.jpg','../img/shouye/brown.png','../img/shouye/cornell.png','../img/shouye/penn.png')
		
//	点击弹出框效果
	var onoff_scrpll = true;
	document.onmousewheel=function  () {
		if (!onoff_scrpll) {
			return false;
		}
	}
	$("#forYou .video_btn").click(function  () {
		onoff_scrpll = false;
		$("#pop").css({display:"block", opacity: "0"}).animate({top:"70px",opacity:"1"},400);
	})
	$("#pop a").click(function  () {
		onoff_scrpll = true;
		$("#pop").css("display","none");
	})




//	nav导航栏效果
	$("#nav>li").hover(function  () {
		$(this).find('.cover:first').fadeIn(500);
		$(this).find('.header_box').fadeIn(100);
		
	},function  () {
		$(this).find('.cover:first').fadeOut(500);
		$(this).find('.header_box').fadeOut(100)
	})
	$(".header_box li").hover(function  () {
		$(this).find('.cover').fadeIn(500);
	},function  () {
		$(this).find('.cover').fadeOut(500);
	})
	
//	our team的点击效果前进，后退特效
	var onoff = false;
	var arr = [];
	var onoff_img = true;
	var arr_list = ['fei.png','jason.png','yvn.png','richard.png','xiaomei.png','rochelle.png','leo.png','liumiao.jpg'];
	var arr_pics = ['ryan.jpg','binbin.png','mk.png','paul.png','nathan.png','sabrina.png','nick.png','karen.jpg'];
	$("#ourEnsure .team .pre,#ourEnsure .team .next").click(function  () {
		if (onoff) {
			return;
		}
		onoff = true;
		if (onoff_img) {
			arr = arr_list;
		}else{
			arr = arr_pics;
		}
		onoff_img = !onoff_img
		$(this).parent().find('.pics').stop().animate({width:'300px',height:"200px"},200,function  () {
			for (var i=0;i<arr_list.length;i++) {
				$(this).find('li').eq(i).find('img').attr("src","../img/shouye/"+arr[i])
			}
			$(this).animate({width:'782px',height:"450px"},200,function  () {
				onoff = false;
			})
		})
	})
//	里面每个图片的hover效果
	$("#ourEnsure .team .pics li").hover(function  () {
		$(this).find('.cover').css('display','none')
	},function  () {
		$(this).find('.cover').css('display','block')
	})
	
	
//	视屏区
	$("#Listen .video_wrap dt,#Listen .video_wrap dd").hover(function  () {
		$(this).addClass('active');
	},function  () {
		$(this).removeClass('active');
	})
	
	
//	学校展示
	$("#ourStu .mid li").hover(function  () {
		$(this).addClass('active');
	},function  () {
		$(this).removeClass('active');
	})
})