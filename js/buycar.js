$(document).ready(function(){
        		$(".pro-top").hover(function(){
        			$(this).children("p").animate({"top":"150px"},100);
        			
        		},function(){
        			$(this).children("p").animate({"top":"180px"},100);
        		})
        		$(".cen-box").hover(function(){
        			$(this).css("border","1px solid #ff9800");
        		},
        		  function(){
        			$(this).css("border","1px solid #c2c2c2");
        		});
        	})

$(function(){
        var cur = 0;
        var $li = $("#banner_list li");
        var $btn = $("#banner_btn li");		//定义三个变量
        $li.eq(0).fadeIn();			//第一个淡入
		paly();						//执行下面的paly函数实现轮播
        $btn.hover(function(){
                clearTimeout(auto);		//清除调用轮播事件
                var index = $(this).index();	//
                $(this).addClass("sel").siblings().removeClass("sel");	//给这个对象添加一个类，然后同辈(兄弟)元素移除这个类
                $li.eq(index).fadeIn(800).siblings().hide();		//
        },function(){
               var index= $(this).index()+1;
                cur = index;
                auto = setTimeout(paly, 3000);
        });
        function paly(){
                $btn.eq(cur).addClass("sel").siblings().removeClass("sel");
                $li.eq(cur).fadeIn(800).siblings().hide();		//	淡入，其他兄弟元素隐藏
                cur++;
                cur = cur >= $btn.length ? 0:cur;		//true则执行冒号前的语句，flase则执行冒号后的语句
                auto = setTimeout(paly, 3000);
        };
		
});