$(document).ready(function  () {
	var timer=null,timer1=null,timer2=null,timer3=null,timer4=null,timer5=null;
	var num=0;
	var j=0;
	var k=0;
	var m_1=0,m_2=0,m_3=0,m_4=0,m_5=0,m_6=0;
	var target=0;
	var arr1=[
	['5796d0b7Nfbedf273.jpg','574272b6N68e2c49a.jpg','57a2b653Nb27515a1.jpg','57a7fb35Ne73a6838.jpg','578337d9Nf6fa5355.jpg','57198934N986a17b5.jpg','5799a27bNd74d720c.jpg','577334c4N64a30f9d.jpg','57ab3828N9e48af87.jpg','57ac140bNd7579ee4.jpg','57ab385cNf59693ca.jpg','57ab386eN09d9fc5f.jpg'],
	['577e04afNc80364aa.png','57562eb1Nf5bc892c.jpg','57a94889N9e255b18.png','57a948d3N051fe2f9.jpg','57a9490eNfad8e330.png','57a94963N5a6f9070.png','57a949a5N8c1b31bb.png','57a94889N9e255b18.png','57a73c52N55ac7e61.jpg','57ab391aN8a9b6380.jpg','57ab392bN4d210760.jpg','57ab393eN4e870730.jpg'],
	['57aee5edN3f9af267.jpg','57a94776Nd641c404.jpg','57ada331N2602775c.jpg','57ada3b2Nbbd4a97f.jpg','57aee855N2e367c4d.jpg','5782fc09N845e8492.jpg','57ad2ef1Nafb43d75.jpg','57ad4ee8Nd6a24eda.jpg','57ab3aafN7493e23c.jpg','57ab3abdNbd9215ce.jpg','57ab3ac9N850d3162.jpg','57ab3ad6Ndb7c5613.jpg'],
	['57aee159N36bd2e50.jpg','57aeddf5N5eebf381.jpg','57aed85aN413fb6fb.jpg','5786fd42N62cc9020.jpg','57aed85aNbe9f6932.jpg','57ad453dN83f5a0d3.jpg','57abed23N7e8cade7.jpg','573c1adcNe086cbb2.jpg','57ab3a64N01f09f02.jpg','57ac1456Nae4117e1.jpg','57ab3a7aNbcad2e6b.jpg','57ab3a87Nd582b336.jpg'],
	['578c6d21N2b0392e3.jpg','578c7d46N095f4ea2.jpg','56206650N8492bc16.jpg','56eb636eNdfde2b21.jpg','57aee29bNdf9cba80.jpg','57aee179N74aeecfd.jpg','571049aaN59e4da59.jpg','5799ae65Nbef0b1f1.jpg','57ab38a5Nde9acd63.jpg','57ab38bfNbee73518.jpg','57ab38eeN94820da0.jpg','57abdb4dN7c0fdd73.jpg'],
	['5754ec64N36d3a08c.jpg','579ab701N7281f99a.jpg','57637271N35152c45.jpg','5742c01cNe9722211.jpg','55e6704eN12ef457b.jpg','57ac4097N25528f39.jpg','57ac47f3N4dabcb8a.jpg','563af6a3N3c6585d5.jpg','57ab3af9Nf3386100.jpg','57ab3b07Ncd13f4de.jpg','57ab3b15N34c85a4c.jpg','57ab3b2bN71141cc3.jpg'],
	['5757c0e0Nf2cf1f6f.jpg','55d3149eNb4498ce3.jpg','5791dc90Nb3c17efb.jpg','549ba8f5N5e1010aa.png','57147f60Ne6779524.jpg','5785fde2N8ee2e24a.jpg','574fee18N01427c60.jpg','5757c0e2N7c177db7.jpg','57ab3a0fN8dbaa84c.jpg','57ab3a1eNcd865d2d.jpg','57ab3a2cNf7d5e1a3.jpg','57ab3a3aNbf2ab35e.jpg'],
	['57aebcf2Nc6260805.jpg','57ac6a69N33e1c0cb.jpg','57ad6113Nf4901eb3.jpg','57aebbb7N039a7d65.jpg','5767a672Ne4bb7ec4.jpg','573e7c1fN34087996.jpg','571ed7a1N244db176.jpg','57ad43b0N8dfc1527.jpg','57ab39baN69a2ed51.jpg','57ab39ccN84732bf3.jpg','57abe9daNd19da81f.jpg','57ab39dfN5d8cb246.jpg'],
	]
	var arr2=[
	['5791b002Ndd9b660c.jpg','57aeb785N0b6a38a5.jpg','57ad7495N20d72e5d.jpg','57afcf23N312c41de.jpg','57ad880dN45b781dd.jpg','57873f38Nad5c53f9.jpg','56f3e0e0Nf8f20e03.jpg','57afe149N099a0d40.jpg','56f3e0e0Nf8f20e03.jpg','57836cdeNad334397.jpg'],
	['57888e0bNd8af8fc6.jpg','57aefbf7Nb1977b30.jpg','5772326dN6c4a84be.jpg','57ad8edbN2622871a.jpg','57ae7bc5N0dd57234.png','57af0739N8e2baf59.jpg','57ad5ee8Nbcbcf642.jpg','57833f72N51104936.jpg','578c31faNe5f4f898.jpg','57ad602dN70c50601.jpg'],
	['57ac4accNca0f5fe5.png','57ac4ac2N27cc967c.png','57ac4a9fN934842ce.png','575e569fNb452f7a5.jpg','57ac8dceNb873f0f6.jpg','57a57aa7Nbf5d5058.jpg','57a57aabN856769c3.jpg','57abed00N3fbedf75.jpg','57ac4aa1N992b34ec.png','57aec215N28dd1b35.jpg'],
	['57afe39dNc839e646.jpg','57ac9cc5Naf543d3d.jpg','57ae8a92N3cfdceaf.jpg','57ae00b2N404dd14f.jpg','57ac9babN68222eba.jpg','57ac821bN9e4fd283.jpg','57ac3489Nce49f5fc.jpg','57aee3cbN7852ba87.jpg','57ac9babN68222eba.jpg','57ae00b3N3ccd918d.jpg'],
	['5508ea89N694a167c.jpg','5420e71eN05b7c53c.jpg','562f4eacN920b1d41.jpg','56a83619Na07ae958.jpg','55bb2d6aN46dd3cd9.jpg','5632dcf4Nad9e4407.jpg','5642ec5fN27b21704.jpg','577c842dNd3167cb1.jpg','570e076fNb5586cc7.jpg','577cd3a0Na110a92c.jpg'],
	['574daed2N6a822da2.jpg','57ad3a3aN0c32cce7.jpg','57ac2365N7a09c787.jpg','57ac29a4N58b471ba.jpg','57ac17baN72dc6c7d.jpg','56ff8832N87393895.jpg','57ac1725N240472a5.jpg','57ac3dc8N3f107a12.jpg','57a2a0a6N59b09882.jpg','577a45f5N50b1e5ed.jpg'],
	['57ad32d7N033c6f27.jpg','57ad6cd5N9e603215.jpg','57ae83f0Nf7c0ff9c.jpg','56c6f748Nb6d36987.jpg','57ad6747N7388fb70.jpg','57ad3174N5cce3968.jpg','57ad6a93N8286ddad.jpg','5792e5a9N9b8f2e0a.jpg','57ad316cNa12e67bf.jpg','57ad8a85Nfd7a7894.jpg'],
	['57a074e5N3b4bab2d.jpg','57ad488aNb7d239f1.jpg','57ab26d0Nd6ecd222.jpg','57a9fc5aNb8411fa9.jpg','57ad9423N8c81dcdc.jpg','576b689eN65bd5420.jpg','5760d263N7322afec.jpg','57a5c70eNc7bea4b4.jpg','55c47409N6ce1fb64.jpg','rBEhWFKz8nEIAAAAAAIGBpbZB7QAAHBkAMBTlIAAgYe381.jpg']
	]
	var arr=['57aae696Nf2c7bf39.jpg','57aae17eN29d181e6.jpg','57a9a1d4Nc30dd34f.jpg','57aaf24eNaeb658be.jpg','57aac714Naf6a3415.jpg']
	var a6=[
	['清洁用品','美妆商城','官方旗舰店','美妆特卖','妆比社','全球购美妆'],
	['面部护肤&nbsp&nbsp>','卸妆','洁面','爽肤水','乳液面霜','精华','眼霜','防晒','面膜','剃须','套装'],
	['洗发护发&nbsp&nbsp>','洗发','护发','染发','造型','假发','套装'],
	['身体护肤&nbsp&nbsp>','沐浴','润肤','精油','颈部','手足','纤体塑形','美胸','套装'],
	['口腔护理&nbsp&nbsp>','牙膏/牙粉','牙刷/牙线','漱口水','套装'],
	['女性护理&nbsp&nbsp>','卫生巾','卫生护垫','私密护理','脱毛膏'],
	['香水彩妆&nbsp&nbsp>','女士香水','男士香水','底妆','眉笔','睫毛膏','眼线','眼影','美甲','唇膏/彩','腮红','美妆工具','套装'],
	['清洁用品&nbsp&nbsp>','女士香水','男士香水','底妆','眉笔','睫毛膏'],
	['宠物生活&nbsp&nbsp>','精油','颈部','手足','纤体塑形','美胸','套装','美妆商城','官方旗舰店','美妆特卖','妆比社','全球购美妆'],
	['女性护理&nbsp&nbsp>','卫生巾','卫生护垫','私密护理','脱毛膏'],
	['香水彩妆&nbsp&nbsp>','女士香水','男士香水','底妆','眉笔','睫毛膏','眼线','眼影','美甲','唇膏/彩','腮红','美妆工具','套装'],
	['清洁用品&nbsp&nbsp>','女士香水','男士香水','底妆','眉笔','睫毛膏'],
	['宠物生活&nbsp&nbsp>','精油','颈部','手足','纤体塑形','美胸','套装','美妆商城','官方旗舰店','美妆特卖','妆比社','全球购美妆']
	]
	$('.nav').mouseover(function  () {
		$('.box-6').css('display','block')
	})
	$('.nav').mouseout(function  () {
		$('.box-6').css('display','none')
		
	})
	$('.box-6').mouseover(function  () {
		$('.box-6').css('display','block')
	})
	$('.box-6').mouseout(function  () {
		$('.box-6').css('display','none')
	})
	$('.shop-car').mouseover(function  () {
		$('.car-hide').css('display','block')
	})
	$('.shop-car').mouseout(function  () {
		$('.car-hide').css('display','none')
		
	})
		$('.c-tab a').eq(0).css('background','red')
		timer=setInterval(function  () {
		num++
		if (num==5) {
			num=0
		}
		$('.c-tab a').css('background','rgba(0,0,0,0.8)')
		$('.c-tab a').eq(num).css('background','red')
		$('.tab img').animate({opacity:"0",width:"100%"},100,function  () {
		$('.tab img').attr('src','img/'+arr[num])
		$('.tab img').animate({width:"100%",opacity:"1"},20)
		
	  })
	},3000)
		$('.c-tab a').mouseover(function  () {
			num=$(this).index();
			$('.c-tab a').css('background','rgba(0,0,0,0.8)')
			$('.c-tab a').eq(num).css('background','red')
			$('.tab img').animate({opacity:"0",width:"100%"},100,function  () {
			$('.tab img').attr('src','img/'+arr[num])
			$('.tab img').animate({width:"100%",opacity:"1"},20)
			clearInterval(timer);
			timer=setInterval(function  () {
			num++
			if (num==5) {
			num=0
			}
			$('.c-tab a').css('background','rgba(0,0,0,0.8)')
			$('.c-tab a').eq(num).css('background','red')
			$('.tab img').animate({opacity:"0",width:"100%"},100,function  () {
			$('.tab img').attr('src','img/'+arr[num])
			$('.tab img').animate({width:"100%",opacity:"1"},20)
	  	 })
		},3000)
	  })
	})
	$('.ul-1 li,.tab-list').mouseover(function() {
		$('.tab-list').css('display','block')
	})
	$('.ul-1>li').mouseover(function() {		
		var e=$(this).index()
		var h='';
		var d='';
		for (i=0;i<a6[0].length;i++) {
			h+="<a href='#'>"+a6[0][i]+"</a>"
		}
		for (j=0;j<a6.length-1;j++) {
			d+="<li><div><a href='#'>"+a6[j+1][0]+"</a><p>"
			for (f=0;f<a6[j+1].length;f++) {
				d+="<a href='#'>"+a6[j+1][f]+"</a>"
			}
			d+="</p></div></li>"
		}
		$('.tab-list>p').html(h)
		$('.tab-list ul').html(d)
	})
	$('.ul-1 li,.tab-list').mouseout(function() {
		$('.tab-list').css('display','none')
	})
	$('.main-bto-r-1,.tab-l,.tab-r').mouseover(function  () {
		$('.tab-l,.tab-r').css('display','block')
	})
	$('.main-bto-r-1').mouseout(function  () {
		$('.tab-l,.tab-r').css('display','none')
	})
	$('.tab-l').click(function  () {
		j--;
		if (j==-4) {
			j=0
		}
		target=(j*1012+207)+'px'
		$('.main-bto-r-1').animate({left:target})
	})
	$('.tab-r').click(function  () {
		j++;
		if (j==1) {
			j=-3;
		}
		target=(j*1012+207)+'px'
		$('.main-bto-r-1').animate({left:target})
	})
	$('#f1 .f-head li').mouseover(function  () {
		k=$(this).index()
		$('#f1 .f-head li').attr('class','')
		$(this).attr('class','active')
		if (k!=0) {
			$('#f1 .f-main-h').css('display','block')
			$('#f1 .f-main-s').css('display','none')
		}else{
			$('#f1 .f-main-h').css('display','none')
			$('#f1 .f-main-s').css('display','block')
		}
		for (i=0;i<12;i++) {
			$('#f1 .f-main-h img').eq(i).attr('src','img-1/'+arr1[k-1][i])
		}
	})
	$('#f2 .f-head li').mouseover(function  () {
		k=$(this).index()
		$('#f2 .f-head li').attr('class','')
		$(this).attr('class','active')
		if (k!=0) {
			$('#f2 .f-main-h').css('display','block')
			$('#f2 .f-main-s').css('display','none')
		}else{
			$('#f2 .f-main-h').css('display','none')
			$('#f2 .f-main-s').css('display','block')
		}
		for (i=0;i<10;i++) {
			$('#f2 .f-main-h img').eq(i).attr('src','img-2/'+arr2[k-1][i])
		}
	})
	$('#f3 .f-head li').mouseover(function  () {
		k=$(this).index()
		$('#f3 .f-head li').attr('class','')
		$(this).attr('class','active')
		if (k!=0) {
			$('#f3 .f-main-h').css('display','block')
			$('#f3 .f-main-s').css('display','none')
		}else{
			$('#f3 .f-main-h').css('display','none')
			$('#f3 .f-main-s').css('display','block')
		}
		for (i=0;i<10;i++) {
			$('#f3 .f-main-h img').eq(i).attr('src','img-2/'+arr2[k-1][i])
		}
	})
	$('#f4 .f-head li').mouseover(function  () {
		k=$(this).index()
		$('#f4 .f-head li').attr('class','')
		$(this).attr('class','active')
		if (k!=0) {
			$('#f4 .f-main-h').css('display','block')
			$('#f4 .f-main-s').css('display','none')
		}else{
			$('#f4 .f-main-h').css('display','none')
			$('#f4 .f-main-s').css('display','block')
		}
		for (i=0;i<10;i++) {
			$('#f2 .f-main-h img').eq(i).attr('src','img-2/'+arr2[k-1][i])
		}
	})
function tab (obj,wid,f_num,m,t,set) {
	$('#f'+f_num+' .f-tab p a').eq(0).css('background','red')
	set=setInterval(function  () {
		m++;
		if (m==4) {
			m=0
		}
		$('.'+obj).animate({left:-wid*m+'px'})
		$('#f'+f_num+' .f-tab p a').css('background','black')
		$('#f'+f_num+' .f-tab p a').eq(m).css('background','red')
	},t)
	$('#f'+f_num+' .f-tab p a').mouseover(function  () {	
		clearInterval(set)
		m=$(this).index()
		$('#f'+f_num+' .f-tab p a').css('background','black')
		$('#f'+f_num+' .f-tab p a').eq(m).css('background','red')
		$('.'+obj).animate({left:-wid*m+'px'})
})	
    $('#f'+f_num+' .f-tab p a').mouseout(function  () {
        set=setInterval(function  () {
		m++;
		if (m==4) {
			m=0
		}
		$('.'+obj).animate({left:-wid*m+'px'})
		$('#f'+f_num+' .f-tab p a').css('background','black')
		$('#f'+f_num+' .f-tab p a').eq(m).css('background','red')
	},t)   	
    })
}
	tab('f-tab-list',443,'1',m_1,4000,timer1)
	tab('f-tab-list-2',340,'2',m_2,3000,timer2)
	tab('f-tab-list-3',444,'3',m_3,4000,timer3)
	tab('f-tab-list-4',444,'4',m_4,3000,timer4)
	tab('f-tab-list-5',444,'5',m_5,4000,timer5)
})
