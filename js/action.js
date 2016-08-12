window.onload = function(){
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
		var i = parseInt(Math.random()*arr.length);
		sentence.innerHTML = arr[i];
	}
	sent();
	setInterval(sent,10000);


	//点击猫返回顶部
	var rope=$('#rope')
	window.onscroll=function(){
		var scroll=document.documentElement.scrollTop||document.body.scrollTop;
		rope.stop()
		if(scroll>550){
			rope.animate({height:"550px"},1500)
		}else{
			rope.animate({height:"0px"},1000)
		}
	}

	var cat = document.getElementById('rope').nextElementSibling
	 cat.onclick=function(){
			var timer=setInterval(function(){
				var scroll=document.documentElement.scrollTop||document.body.scrollTop;
				if(scroll>50){
					console.log(scroll)
					scroll/=1.15;
					document.documentElement.scrollTop=document.body.scrollTop=scroll;
				}else{
				
					document.documentElement.scrollTop=document.body.scrollTop=0;
					clearInterval(timer)
					return;			
				}
			},20);	
	}


	//点击[查看更多]显示下方div
	var clickMore = document.getElementsByClassName('click');
	var newsSim = document.getElementsByClassName('act_sim');
	var newsDet = document.getElementsByClassName('act_det');
	var clickBack = document.getElementsByClassName('click_back');
	var scr1;
	for(var i=0;i<clickMore.length;i++){
		clickMore[i].index = i;
		clickMore[i].onclick = function(){
		scr1=document.documentElement.scrollTop||document.body.scrollTop;
		newsSim[this.index].style.display = 'none';
		newsDet[this.index].style.display = 'block';
		}
	}
	for(var j=0;j<clickBack.length;j++){
		clickBack[j].index = j;
		clickBack[j].onclick = function(){
		newsSim[this.index].style.display = 'block';
		newsDet[this.index].style.display = 'none';
		document.documentElement.scrollTop = document.body.scrollTop=scr1; 
		}
	}


	//点击改变display属性
	var sidebar = document.getElementById('sidebar');
	var sideList = sidebar.children;
	var newact = document.getElementsByClassName('new_act')[0];
	var allact = document.getElementsByClassName('all_act')[0];
	

	sideList[0].onclick = function(){
		newact.style.display = 'block';
		allact.style.display = 'none';

	}
	sideList[1].onclick = function(){
		newact.style.display = 'none';
		allact.style.display = 'block';
	}
}