var data={
	head:{
		fSays:"从不羡慕别人的优秀，因为相信自己也可以优秀。",
		sSays:"闲下来时看看书，书本里的故事，总有你学到的人生。",
		nav:['首页','关于ME','时言碎语','学无止境','好书推荐','联系：QQ、WEIXIN']
	},
	main:{
		/*首页轮播图*/
		tab:['skt.jpg','u=4184708496,743406806&fm=21&gp=0.jpg','u=3928844826,2785819618&fm=11&gp=0.jpg','pipi.jpg','arata.jpg',]
	},
	
	site:[
		{
			img:'img/aboume_bg.jpg',
			h2:'node+mysql项目-线上预览',
			href:'http://jingyingba.applinzi.com',
			title:'通过express实现功能：1.node响应请求，jade模板渲染页面。2.登陆注册。3.数据分页效果。4.简单的后台添加课程页面。<br/>心得静下来了。太浮躁只会原地踏步。',
		},
		{
			img:'./react/img/tu.png',
			h2:'RN--仿韩寒的个人APP',
			href:'https://pan.baidu.com/s/1nv4i7sX',
			title:'真的是不断入坑啊，找到个开放API的数据，做了一个APP，但感觉不是太完善，待解决的问题：1.图片加载不出，2.页面切换效果有卡顿。3.音频的播放4.分享朋友圈。唉，找不到工作也没心思搞了，以后在作出完整的。',
		},
		{
			img:'./react/img/QQ20161025-0.png',
			h2:'react native初试',
			href:'https://wangjian88.github.io/react/',
			title:'learn once!write anywhere!从0开始的app之路。从环境搭配，真机调试到最终的apk打包，踩过了好多坑，做出的app也和视觉稿相差盛大，所以就不把apk文件放上来了。但是，真的很强大啊，流畅的性能，开发的时间，通配性。',
		},
		{
			img:'img/daduzi.png',
			h2:'适配IE8项目--大肚子桶业',
			href:'https://wangjian88.github.io/daduzi/HTML/homePage.html',
			title:'比较完整的项目，实现了比较多的页面，温顾了IE8及以上下的诸多兼容性问题。算是一个比较传统的web网站需求，js这部分很简单了，切图和css是真的繁琐啊，还要考虑许多细节。',
		},
		{
			img:'img/100du.png',
			h2:'第一个制作的网页--100度',
			href:'https://wangjian88.github.io/100du/',
			title:'想必很多人都想建立一个，属于自己的个人博客，把自己的一些学习的经验和经历，通过互联网的形式来分享给别人。通过分享与网友进行互动，让更多的人了解和认识你，并且树立自己在互联网上的个人',
		},
		{
			img:'img/muke.png',
			h2:'模块化网站--幕课网',
			href:'https://wangjian88.github.io/%E5%B9%95%E8%AF%BE/',
			title:'想必很多人都想建立一个，属于自己的个人博客，把自己的一些学习的经验和经历，通过互联网的形式来分享给别人。通过分享与网友进行互动，让更多的人了解和认识你，并且树立自己在互联网上的个人',
		},
		{
			img:'img/jindon.png',
			h2:'电商网站--京东',
			href:'https://wangjian88.github.io/jindon/',
			title:'想必很多人都想建立一个，属于自己的个人博客，把自己的一些学习的经验和经历，通过互联网的形式来分享给别人。通过分享与网友进行互动，让更多的人了解和认识你，并且树立自己在互联网上的个人',
		},
		{
			img:'img/guangdong.png',
			h2:'bootstrap--响应式网站',
			href:'https://wangjian88.github.io/%E6%B4%BB%E5%8A%9B%E5%B9%BF%E4%B8%9C/',
			title:'想必很多人都想建立一个，属于自己的个人博客，把自己的一些学习的经验和经历，通过互联网的形式来分享给别人。通过分享与网友进行互动，让更多的人了解和认识你，并且树立自己在互联网上的个人',
		},
		{
			img:'img/qqcompany.png',
			h2:'qq腾讯--经典企业网站',
			href:'https://wangjian88.github.io/qq企业/',
			title:'想必很多人都想建立一个，属于自己的个人博客，把自己的一些学习的经验和经历，通过互联网的形式来分享给别人。通过分享与网友进行互动，让更多的人了解和认识你，并且树立自己在互联网上的个人',
		}
	]	
}
var artical=[
	{
		id:0,
		img:'img-0.jpg',
		href:'https://wangjian88.github.io/blog/tags/%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/',
		title:'javaScript高级程序设计笔记',
		key:'js,红皮书，经典',
		detail: '学习js不得不看的一本好书，知识点由浅入深，语言精髓。忍不了想写一份长篇笔记，加深对js的理解'
	},
	{
		id:1,
		img:'img-1.jpg',
		href:'https://wangjian88.github.io/blog/tags/node/',
		title:'全栈开发-node.js',
		key:'node.js',
		detail: "node.js-前端工程师的必备技能！！在今年的双11中更是大放异彩，出色的表现征服了所有互联网开发者，已然成为一种趋势。让前端开发者更加强大！"
	},
	{
		id:2,
		img:'img-2.jpg',
		href:'https://wangjian88.github.io/blog/2016/07/12/%E9%9D%A2%E8%AF%95%E9%A2%98/',
		title:'移动端开发',
		key:'静态，响应式，rem',
		detail: "后互联网时代也可以叫移动互联时代，无论是线上商城，还是视屏，阅读娱乐，移动端占比可以说已经碾压pc端。面对不计其数的大小，分辨率各不相同移动端设备，一次开发，适配所有已经成为检验一个前端开发者是否优秀的必须技能！"
	},
	{
		id:3,
		img:'img-3.jpg',
		href:'https://wangjian88.github.io/blog/2016/03/02/hello-world/',
		title:'hexo搭建博客',
		key:'hexo,blog,github',
		detail: "托管在github上的hexo博客系统，markdown作为书写模板，内容完全静态化，并且完全免费，实在是没有能力拥有自己服务器开发者的福音。"
	},
	{
		id:4,
		img:'img-4.jpg',
		href:'https://wangjian88.github.io/blog/2016/07/12/%E9%9D%A2%E8%AF%95%E9%A2%98/',
		title:'精选面试题',
		key:'面试题，面向对象',
		detail: "温故知新，优秀的题目真的会对自己对js的理解更上一层路，是一种快速深入学习的捷径。"
	}
]
			
















