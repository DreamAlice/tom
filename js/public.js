
$(function(){
	$("#nav").children("ul").children("li").children("ul").attr("class","bgul2");
	// 一级导航鼠标动作
	$("#nav").children("ul").children("li").each(function(){
		$(this).hover(
		function(){
			$(this).children("a").attr("class","bgli1").next("ul").attr("class","bgul");
		},
		function(){
			$(this).children("a").attr("class","").next("ul").attr("class","bgul2");
		  })
		})
		// 二级导航鼠标动作
	 $("#nav").children("ul").children("li").children("ul").children("li").each(
	 	function(){
	 	$(this).hover(function(){
	 		$(this).attr("class","bgli2");
	 	},
	 	function(){
	 		$(this).attr("class","");
	 	})
	})
}) //*****************以上为导航特效***********************