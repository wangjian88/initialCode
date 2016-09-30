$(document).ready(function() {

	/*样式初始化*/
	$('.main-tab img').attr('src', 'img/' + data.main.tab[0])
	for(i = 0; i < data.main.tab.length; i++) {
		$('.main-tab li').eq(i).children('a').children('img').attr('src', 'img/' + data.main.tab[i])
	}
	var html = ""
	for(i = 0; i < data.site.length; i++) {
		html += "<li><img src=\'" + data.site[i].img + "\'/><div class='hide'><h2>" + data.site[i].h2 + "</h2><p>" + data.site[i].title + "</p><a href=\'" + data.site[i].href + "\'></a></div></li>"
	}
	$('.site ul').css('width', data.site.length * 232 + 'px')
	$('.site ul').html(html)

	/*首页轮播图*/
	var num = 0;
	var Time1 = null;
	Time1 = setInterval(function() {
		num++
		if(num == 5) {
			num = 0
		}
		$('.lun').animate({
			top: num * 61 + 'px'
		})
		$('.tab-show').animate({
			opacity: "0.4"
		}, 100, function() {
			$(this).attr('src', 'img/' + data.main.tab[num])
		}).animate({
			opacity: "1"
		}, 500)
	}, 3000)
	$('.main-tab li').mouseover(function() {
			clearInterval(Time1)
			$('.lun').stop();
			$('.tab-show').stop();
			num = $(this).index()
			$('.lun').animate({
				top: num * 61 + 'px'
			}, function() {
				$('.tab-show').animate({
					opacity: "0.4"
				}, 100, function() {
					$(this).attr('src', 'img/' + data.main.tab[num])
				}).animate({
					opacity: "1"
				}, 500)
			})

			Time1 = setInterval(function() {
				num++
				if(num == 5) {
					num = 0
				}
				$('.lun').animate({
					top: num * 61 + 'px'
				})
				$('.tab-show').animate({
					opacity: "0.4"
				}, 100, function() {
					$(this).attr('src', 'img/' + data.main.tab[num])
				}).animate({
					opacity: "1"
				}, 500)
			}, 3000)
		})
		/*website区*/
	;
	var num1 = 0;
	$('.site_circle a').eq(0).css('background', 'black')
	$('.site ul li').mouseover(function() {
		$('.site').css('overflow-x', 'auto')
		$(this).children('.hide').animate({
			top: "-100px"
		})
		$('.site').mouseleave(function() {
			$('.site').css('overflow', 'hidden')
			$('.site').scrollLeft(0);
		})
	})
	$('.site ul li').mouseleave(function() {
		$('li .hide').stop(true, true)
		var that = $(this)
		$(this).children('.hide').animate({
			top: "0px"
		}, function() {
			that.css({
				background: "white url(img/shenglv.png) no-repeat 97% 96%",
				backgroundSize: "15px 10px"
			})
		})
	})
	$('.new_pin').mouseenter(function() {
		$(this).stop()
		$(this).animate({
			backgroundPositionX: "-300px"
		}, 800)
	})
	$('.new_pin').mouseleave(function() {
		$(this).stop()
		$(this).animate({
			backgroundPositionX: "0px"
		}, 800)
	})

})