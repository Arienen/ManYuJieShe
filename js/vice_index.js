window.onload = function(){
	


	//背景音乐控制
	var music = document.getElementById("bgmusic");
	$("#audioBtn").click(function(){
	if(music.paused){
		music.play();
		$("#audioBtn").removeClass("pause").addClass("mscBtn");
	}else{
		music.pause();
		$("#audioBtn").removeClass("mscBtn").addClass("pause");}});



	//下拉列表隐藏及显示 
	var aboutUs = document.getElementById('aboutUs');
	var pic = document.getElementById('pic');
	var act = document.getElementById('act');
	var news = document.getElementById('news');
	var aboutMenu = aboutUs.lastElementChild;
	var picMenu = pic.lastElementChild;
	var actMenu = act.lastElementChild;
	var newsMenu = news.lastElementChild;
	//console.log(aboutMenu,picMenu,actMenu,newsMenu);
	//绑定鼠标滑过事件
	aboutUs.onmouseover = function(){
		//更改下拉菜单的display属性
		aboutMenu.style.display = 'block';
	}
	pic.onmouseover = function(){
		picMenu.style.display = 'block';
	}
	act.onmouseover = function(){
		actMenu.style.display = 'block';
	}
	news.onmouseover = function(){
		newsMenu.style.display = 'block';
	}

	//鼠标离开2s后隐藏下拉菜单
	aboutUs.onmouseout = function(){
		aboutMenu.style.display = 'none';
	}
	pic.onmouseout = function(){
		picMenu.style.display = 'none';
	}
	act.onmouseout = function(){
		actMenu.style.display = 'none';
	}
	news.onmouseout = function(){
		newsMenu.style.display = 'none';
	}
	
	

	//banner每隔10秒换一句谚语
	var sentence = document.getElementById('sentence');
	var arr = ['愛することこそ幸福だ。(被爱不一定是幸福 ，去爱才真的幸福。)','一人でいるのが寂しくなるのも、最初の一歩が怖いのも。(一个人会寂寞，只是怕踏出最初那一步。)','もっとも永く続く愛は、報われぬ愛である。(最长久的爱是不求回报的爱。)','考えすぎると、人間は 臆病になる。(想得太多，人就会变得胆怯。)','おまえがいない世界は、オレには暗すぎてなにも见えないんだよ。(没有你的世界对我来说黑暗得什么也看不见。)','优（やさ）しさにはいつも感谢（かんしゃ）してる。だから强（つよ）くなりたい。(一直感念那些温柔，所以想变得强大。)','自分（じぶん）の梦（ゆめ）を强（つよ）く信（しん）じる人间（にんげん）にこそ、未来（みらい）は开（ひら）かれる。(未来属于那些坚定相信自己梦想的人。)'];
	
	function sent(){
		var i = parseInt(Math.random()*7);
		sentence.innerHTML = arr[i];
	}
	sent();
	setInterval(sent,10000);


	//top图片自动播放及左右切换效果
	var shuf = document.getElementsByClassName('shuf')[0];
	var imgs = shuf.children;
	var rightPoint = shuf.lastElementChild;
	var leftPoint = rightPoint.previousElementSibling;
	var topP = leftPoint.previousElementSibling;
	//鼠标悬停在箭头时更换背景图片
	rightPoint.onmouseover = function(){
		rightPoint.style.background = 'url(../images/right.png) no-repeat';
	}
	leftPoint.onmouseover = function(){
		leftPoint.style.background = 'url(../images/left.png) no-repeat';
	}
	//鼠标离开时背景图变回原来的
	rightPoint.onmouseout = function(){
		rightPoint.style.background = 'url(../images/right1.png) no-repeat';
	}
	leftPoint.onmouseout = function(){
		leftPoint.style.background = 'url(../images/left1.png) no-repeat';
	}
	//绑定点击事件，达成左右切换效果
	rightPoint.onclick = function(){ //右箭头
		for(var i=0;i<3;i++){
			if(imgs[i].style.display == 'block'){
				imgs[i].style.display = 'none';
				if(i==2){
					imgs[0].style.display='block'
					return;
				}else{
					imgs[i+1].style.display = 'block';
					return;
				}
		
			}
		}
	}
	leftPoint.onclick = function(){ //左箭头
		for(var i=0;i<3;i++){
			if(imgs[i].style.display == 'block'){
				imgs[i].style.display = 'none';
				if(i==0){
					imgs[2].style.display='block'
					return;
				}else{
					imgs[i-1].style.display = 'block';
					return;
				}
		
			}
		}
	}
	//设置定时器，轮播
	setInterval(function(){
		for(var i=0;i<3;i++){
			if(imgs[i].style.display == 'block'){
				imgs[i].style.display = 'none';
				if(i==2){
					imgs[0].style.display='block'
					return;
				}else{
					imgs[i+1].style.display = 'block';
					return;
				}
			}
		}
	},5000);


	//鼠标悬停到更多，变更图片路径
	var more = document.getElementsByClassName('more');
	for(var i=0;i<more.length;i++){
		more[i].onmouseover = function(){
			this.src = '../images/add2.png';
		}
		more[i].onmouseout = function(){
			this.src = '../images/add.png';
		}
	}
	
	//滑过图片显示标题
	var picture = document.getElementsByClassName('picture')[0];
	var list=picture.getElementsByTagName('li');
	var pictit=picture.getElementsByTagName('span');
	for(var i=0;i<list.length;i++){
		list[i].idx=i
		list[i].onmouseover=function(){
			pictit[this.idx].style.display='block'
		}
		list[i].onmouseout=function(){
			pictit[this.idx].style.display='none'
		}
	}


	//点击猫返回顶部
	var rope=$('#rope');
	window.onscroll=function(){
		var scroll=document.documentElement.scrollTop || document.body.scrollTop;
		rope.stop();
		if(scroll>550){
			rope.animate({height:"550px"},1500)
		}else{
			rope.animate({height:"0px"},1000)
		}
	}

	var cat = document.getElementById('rope').nextElementSibling;
	cat.onclick=function(){
		var timer=setInterval(function(){
			var scroll=document.documentElement.scrollTop||document.body.scrollTop;
			if(scroll>50){
				//console.log(scroll);
				scroll /= 1.15;
				document.documentElement.scrollTop=document.body.scrollTop=scroll;
			}else{
				document.documentElement.scrollTop=document.body.scrollTop=0;
				clearInterval(timer)
				return;			
			}
		},20);	
	}
}
