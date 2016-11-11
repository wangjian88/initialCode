
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
				var oli = getsByClass('hasGoods')[0].getElementsByTagName('li');
				oli[this.index].style.display = 'none';
			}
		}
	}
	getsByClass('shopcar')[0].onmouseout = function() {
		getsByClass('shopcar')[0].style.display = 'none';
		getsByClass('hasGoods')[0].style.display = 'none';
	}
	var omask=document.getElementById('mask');
	getsByClass('login_a')[0].onclick=function  () {
		omask.style.display="block";
		getsByClass('login')[0].style.display = 'block';
		getsByClass('toReg_a')[0].onclick=function  () {
			getsByClass('login')[0].style.display = 'none';
			getsByClass('reg')[0].style.display = 'block';
		}
	}
	getsByClass('reg_a')[0].onclick=function  () {
		omask.style.display="block";
		getsByClass('reg')[0].style.display = 'block';
		getsByClass('toLogin_a')[0].onclick=function  () {
			getsByClass('login')[0].style.display = 'block';
			getsByClass('reg')[0].style.display = 'none';
		}
	}
	var oturn = document.getElementById('turn');
	var timer = null;
	var num_t = 0;
	var oturn_width = oturn.offsetWidth;
	oturn.style.width = oturn_width * 2 + 'px';
	oturn.innerHTML += oturn.innerHTML;
	timer = setInterval(function() {
		num_t += 1;
		if(num_t == oturn_width) {
			oturn.style.left = '0px';
			num_t = 0;
		}
		oturn.style.left = -num_t + 'px';
	}, 10)
	oturn.onmouseover = function() {
		clearInterval(timer)
	}
	oturn.onmouseout = function() {
		timer = setInterval(function() {
			num_t += 1;
			if(num_t == oturn_width) {
				oturn.style.left = '0px';
				num_t = 0;
			}
			oturn.style.left = -num_t + 'px';
		}, 10)
	}
}