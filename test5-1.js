//鼠标悬停导航栏变色 //好使
var timeout         = 500;
var closetimer		= 0;
var ddmenuitem      = 0;

function jsddm_open()
{	jsddm_canceltimer();
	jsddm_close();
	ddmenuitem = $(this).find('ul').eq(0).css('visibility', 'visible');}

function jsddm_close()
{	if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');}

function jsddm_timer()
{	closetimer = window.setTimeout(jsddm_close, timeout);}

function jsddm_canceltimer()
{	if(closetimer)
	{	window.clearTimeout(closetimer);
		closetimer = null;}}

$(document).ready(function()
{	$('.dropdown').bind('mouseover', jsddm_open);
	$('.dropdown').bind('mouseout',  jsddm_timer);});

document.onclick = jsddm_close;

//图片全屏//获取图片数组
var imgArr=$('img.pic');
$('img').click(function (){
	var currentImg=$(this);
	var currentIndex;
	for(var i=0;i<imgArr.length;i++){
		if(imgArr[i]==currentImg[0]){
			currentIndex=i;
		}
	}
//占位
	$(".wall").fadeIn();
	$(".placeHolder").show();
	$(".bigImg").attr("src",imgArr[currentIndex].src);
	var pTop = ($(window).height() - $('.bigImg').height()) / 2;
    var pLeft = ($(window).width() - $('.bigImg').width()) / 2;
	$('.bigImg').css({top:pTop,left:pLeft});
//退出//退出图标被移除了此处代码无效
	$(".quit").click(function(){
		$(".wall").fadeOut();
		$(".placeHolder").hide();
	});
//下一张
	$(".next").click(function(){
		if(imgArr[currentIndex+1]){
		currentIndex++;
		$(".bigImg").attr("src",imgArr[currentIndex].src);
		var pTop = ($(window).height() - $('.bigImg').height()) / 2;
    	var pLeft = ($(window).width() - $('.bigImg').width()) / 2;
		$('.bigImg').css({top:pTop,left:pLeft});
		}
	});
//上一张
	$(".prev").click(function(){
		if(imgArr[currentIndex-1]){
		currentIndex--;
		$(".bigImg").attr("src",imgArr[currentIndex].src);
		var pTop = ($(window).height() - $('.bigImg').height()) / 2;
    	var pLeft = ($(window).width() - $('.bigImg').width()) / 2;
		$('.bigImg').css({top:pTop,left:pLeft});
		}
	});
//按键 esc退出 右方向键next 左方向键 prev
	$(document).keydown(function(event){
		e = event/* || window.event*/;
		var keycode = e.which ? e.which : e.keyCode;
		if(keycode == 37){
			if(imgArr[currentIndex-1]){
			currentIndex--;
			$(".bigImg").attr("src",imgArr[currentIndex].src);
			var pTop = ($(window).height() - $('.bigImg').height()) / 2;
    		var pLeft = ($(window).width() - $('.bigImg').width()) / 2;
			$('.bigImg').css({top:pTop,left:pLeft});
			}
		}else if (keycode == 39){
			if(imgArr[currentIndex+1]){
			currentIndex++;
			$(".bigImg").attr("src",imgArr[currentIndex].src);
			var pTop = ($(window).height() - $('.bigImg').height()) / 2;
    		var pLeft = ($(window).width() - $('.bigImg').width()) / 2;
			$('.bigImg').css({top:pTop,left:pLeft});
			}
		}else if(keycode == 27){
			$(".wall").fadeOut();
			$(".placeHolder").hide();
		}
	});
});