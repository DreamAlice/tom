 $(function(){
 var bwidth=$("#banner").width();
 $("#banner").height(bwidth/3);
 $("#banner-content").width(bwidth*3);
 $("#banner-content").height(bwidth/3);
 $("#banner-content img").width(bwidth);
 $("#banner-content img").height(bwidth/3);
 $("#num").css({"left":(bwidth/2-30),"top":(bwidth/3-20)});
 // *******以上为banner内宽度高度以及滚动点坐标设置*******
   var i=0;
     	function mq(){
     	$("#banner-content").animate({"left":-bwidth},1000,function(){
     		$(this).append($(this).children().first());
     		$(this).css("left","0px");
     	});  
     i++;
     if(i>2){
     	i=0;
     }
     $("#num").children("span:eq("+i+")").attr("class","m").siblings().attr("class","n");
    }
    
    j=setInterval(mq,2000);
    $("#banner-content").hover(function(){
    	clearInterval(j);
    },function(){
    	 j=setInterval(mq,2000);
    })

  // *************以上为banner滚动特效*************************
})