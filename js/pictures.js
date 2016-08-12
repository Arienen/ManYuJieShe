window.onload = function(){
	pubuliu($(".container:eq(0) .box"));//一上来就调用瀑布流


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


	//点击改变display属性
	var sidebar = document.getElementById('sidebar');
	var sideList = sidebar.children;
	var actPic = document.getElementsByClassName('container')[0];
	var menWork = document.getElementsByClassName('container')[1];
	var aniPic = document.getElementsByClassName('container')[2];

	sideList[0].onclick = function(){
		actPic.style.display = 'block';
		menWork.style.display = 'none';
		aniPic.style.display = 'none';
		pubuliu($(".container:eq(0) .box"))

	}
	sideList[1].onclick = function(){
		menWork.style.display = 'block';
		actPic.style.display = 'none';
		aniPic.style.display = 'none';
			pubuliu($(".container:eq(1) .box"))
	}
	sideList[2].onclick = function(){
		aniPic.style.display = 'block';
		actPic.style.display = 'none';
		menWork.style.display = 'none';
			pubuliu($(".container:eq(2) .box"))
	}


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


	//瀑布流效果
	function pubuliu(contEq){
		$(".container").css("width",980);//设置瀑布最大盒子的宽度，目的是为了让盒子居中
		var max =0   //存放最大高度,
		for(var i = 0;i <= contEq.length - 1; i++){
			contEq.eq(i).css({"top":0})
			var leijia=0;//定义一个累加器
			// 下面的for循环，是累加器，比如当前i为9，那么下面的循环
			//	将计算6、3、0号盒子的高度累加。
			for(var j = i - 3;j >= 0; j -= 3){
				leijia=leijia+contEq.eq(j).height()+20;
				if(leijia+contEq.eq(j).height()>max){
					max =leijia+contEq.eq(j).height()//获取目前最大高度
				}
			}
			contEq.eq(i).css(
					"left",i % 3 *330 + 20
			);
			contEq.eq(i).stop().animate(
				{
					"top":leijia+30
				},1000
			);
		}
		 $(".container").css("height",max+60)//设置照片容器高度，随瀑布流高度变化
	}

}