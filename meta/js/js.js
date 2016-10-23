/**函数分装**/
/**运动**/
function startMove(obj, json, endFn) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var bBtn = true;
		for(var attr in json) {
			var iCur = 0;
			if(attr == 'opacity') {
				if(Math.round(parseFloat(getStyle(obj, attr)) * 100) == 0) {
					iCur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
				} else {
					iCur = Math.round(parseFloat(getStyle(obj, attr)) * 100) || 100;
				}
			} else {
				iCur = parseInt(getStyle(obj, attr)) || 0;
			}
			var iSpeed = (json[attr] - iCur) / 5;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			if(iCur != json[attr]) {
				bBtn = false;
			}
			if(attr == 'opacity') {
				obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')';
				obj.style.opacity = (iCur + iSpeed) / 100;
			} else {
				obj.style[attr] = iCur + iSpeed + 'px';
			}
		}
		if(bBtn) {
			clearInterval(obj.timer);
			if(endFn) {
				endFn.call(obj);
			}
		}
	}, 30);
}

function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}
/**get by class**/
function getsByClass(sClass, oParent) {  
	if(!document.getElementsByClassName) {  
		var aElist = (oParent || document).getElementsByTagName('*');  
		var arrResult = [];  
		var re = new RegExp('\\b' + sClass + '\\b', 'i') ; 
		for(var i = 0; i < aElist.length; i++) {   
			if(re.test(aElist[i].className)) {   
				arrResult.push(aElist[i])   
			}  
		}  
		return arrResult;  
	} else {  
		return(oParent || document).getElementsByClassName(sClass);  
	} 
};

window.onload = function() {
	//	首页
	//轮播区
	var obanner = getsByClass('banner')[0]
	var oul = obanner.getElementsByTagName('ul')[0];
	var oli = oul.getElementsByTagName('li');
	var op = obanner.getElementsByTagName('p')[0];
	var time = null;
	var onoff = true;
	var num = 0;
	//				初始化nav_li宽度
	var oli_width = window.screen.width
	for(i = 0; i < oli.length; i++) {
		oli[i].style.width = oli_width + 'px';
		op.innerHTML += "<a href='#'></a>";
	}
	oul.style.width = oli_width * oli.length + 'px';
	op.style.left = oli_width / 2 - (op.offsetWidth - 15) / 2 + 'px';
	var oa = op.querySelectorAll('a');
	oa[0].style.background = "black"
		//				轮播函数
	function tab() {
		var oli = oul.querySelectorAll('li');
		num++;
		if(num == 3) {
			num = 0
		}
		for(var i = 0; i < oli.length; i++) {
			oa[i].style.background = "white"
		}
		oa[num].style.background = "black"
		startMove(oul, {
			left: -oli_width
		}, function() {
			oul.appendChild(oli[0])
			oul.style.left = '0px'
		})
	}
	//				定时器
	time = setInterval(tab, 3000)
		//				移入
	obanner.onmouseover = function() {
			clearInterval(time)
		}
		//					移出
	obanner.onmouseleave = function() {
		time = setInterval(tab, 3000)
	}

	//头部区域
	var oremeber = getsByClass('remeber')[0];
	var odl = oremeber.getElementsByTagName('dl')[0];
	var odt = odl.getElementsByTagName('dt')[0];
	var odd = odl.getElementsByTagName('dd');
	var oshopBag = getsByClass('shopBag')[0];
	var oli = getsByClass('hasGoods')[0].getElementsByTagName('li');
	var num = oli.length;
	odl.onmouseover = function() {
		for(var i = 0; i < odd.length; i++) {
			odd[i].style.display = 'block';
		}
		getsByClass('hasGoods')[0].style.display = 'none';
		odl.style.border = "2px solid #ccc";
		odl.style.borderTop = "none";
		odl.style.left = "-2px";
		odt.style.backgroundImage = "url(../img/icon/arrow.png)"
	}
	odl.onmouseout = function() {
		for(var i = 0; i < odd.length; i++) {
			odd[i].style.display = 'none';
		}
		odl.style.border = "none";
		odl.style.left = "0px";
		odt.style.backgroundImage = "url(../img/icon/arrow_top.png)";
	}
	oshopBag.onmouseover = function() {
		getsByClass('shopcar')[0].style.display = 'block';
		getsByClass('hasGoods')[0].style.display = 'block';
		var olen = getsByClass('del').length;

		for(var i = 0; i < olen; i++) {
			getsByClass('del')[i].index = i;

			getsByClass('del')[i].onclick = function() {
				num--;
				//				alert(num)
				var oli = getsByClass('hasGoods')[0].getElementsByTagName('li');
				oli[this.index].style.display = 'none';
			}
		}
	}
	getsByClass('shopcar')[0].onmouseout = function() {
		getsByClass('shopcar')[0].style.display = 'none';
		getsByClass('hasGoods')[0].style.display = 'none';
	}

	var omask = document.getElementById('mask');
	getsByClass('login_a')[0].onclick = function() {
		omask.style.display = "block";
		getsByClass('login')[0].style.display = 'block';
		getsByClass('toReg_a')[0].onclick = function() {
			getsByClass('login')[0].style.display = 'none';
			getsByClass('reg')[0].style.display = 'block';
		}
	}
	getsByClass('reg_a')[0].onclick = function() {
		omask.style.display = "block";
		getsByClass('reg')[0].style.display = 'block';
		getsByClass('toLogin_a')[0].onclick = function() {
			alert(1)
			getsByClass('login')[0].style.display = 'block';
			getsByClass('reg')[0].style.display = 'none';
		}
	}

}