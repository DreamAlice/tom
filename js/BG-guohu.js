$(document).ready(function(){
	//验证原车主姓名
	var msg="必填项正确"
	$(".nameid").keyup(function(){
		var name=/^\w{3}$/
       if(name.test($(this).val()) && !$(this).val()==""){
       	$(this).removeAttr("class");
       	$("#namemsg").attr("class","r").html(msg);

       }else{
       	$(this).attr("class","bgwrong");
       	$("#namemsg").attr("class","").html("车主姓名为必填项");
      
       }
	}).focus(function(){
     		$(this).triggerHandler("keyup");
     	});

	//验证车主身份证号码
	$(".idcard").keyup(function(){
		var id=/^\d{17}(\X|[0-9]){1}$/;
       if(id.test($(this).val()) && $(this).val()!=""){
       	$(this).removeAttr("class");
       	$("#idcardmsg").attr("class","r").html(msg);

       }else{
       	$(this).attr("class","bgwrong");
       	$("#idcardmsg").attr("class","").html("车主身份证号码为必填项");
       	return false;
       }
	}).focus(function(){
     		$(this).triggerHandler("keyup");
     	});

	//验证车牌号码
	$(".numsid").keyup(function(){
		var num=/^(\冀\C)-\w{5}$/;
       if(num.test($(this).val()) && $(this).val()!=""){
       	$(this).removeAttr("class");
       	$("#numsmsg").attr("class","r").html(msg);

       }else{
       	$(this).attr("class","bgwrong");
       	$("#numsmsg").attr("class","").html("车牌号码为必填项");
       	return false;
       }
	}).focus(function(){
     		$(this).triggerHandler("keyup");
     	});


   //验证车架号
   $(".carid").keyup(function(){
		var nums=/\w{10}/;
       if(nums.test($(this).val()) && $(this).val()!=""){
       	$(this).removeAttr("class");
       	$("#carmsg").attr("class","r").html(msg);

       }else{
       	$(this).attr("class","bgwrong");
       	$("#carmsg").attr("class","").html("车架号码为必填项");
       	return false;
       }
	}).focus(function(){
     		$(this).triggerHandler("keyup");
     	});

	//验证新车主姓名
	$(".newnameid").keyup(function(){
    var nename=/^\w{3}$/
       if(nename.test($(this).val()) && !$(this).val()==""){
       	$(this).removeAttr("class");
       	$("#newnamemsg").attr("class","r").html(msg);

       }else{
       	$(this).attr("class","bgwrong");
       	$("#newnamemsg").attr("class","").html("车主姓名为必填项");
       	return false;
       }
	}).focus(function(){
     		$(this).triggerHandler("keyup");
     	});

	//验证车主身份证号码
	$(".nidcard").keyup(function(){
		var id1=/^\d{17}(\X|[0-9]){1}$/;
       if(id1.test($(this).val()) && $(this).val()!=""){
       	$(this).removeAttr("class");
       	$("#nidcardmsg").attr("class","r").html(msg);

       }else{
       	$(this).attr("class","bgwrong");
       	$("#nidcardmsg").attr("class","").html("车主身份证号码为必填项");
       	// return false;
       }
	}).focus(function(){
     		$(this).triggerHandler("keyup");
     	});


     //验证新车牌号
     $(".nnums").keyup(function(){
    var num1=/^(\冀\C)-\w{5}$/;
       if(num1.test($(this).val()) && $(this).val()!=""){
        $(this).removeAttr("class");
        $("#nnumsmsg").attr("class","r").html(msg);

       }else{
        $(this).attr("class","bgwrong");
        $("#nnumsmsg").attr("class","").html("车牌号码为必填项");
        return false;
       }
  }).focus(function(){
        $(this).triggerHandler("keyup");
      });

  //验证合同编号
  $(".hetongid").keyup(function(){
    var nums2=/\w{12}/;
       if(nums2.test($(this).val()) && $(this).val()!=""){
        $(this).removeAttr("class");
        $("#hetongmsg").attr("class","r").html(msg);

       }else{
        $(this).attr("class","bgwrong");
        $("#hetongmsg").attr("class","").html("合同编号为必填项");
        return false;
       }
  }).focus(function(){
        $(this).triggerHandler("keyup");
      });
  //验证原车主签名
  $("#previd").keyup(function(){
    // var name=/^\w{3}$/
       if(($(this).val()==$("#nameid").val()) && $(this).val()!=""){
        $(this).removeAttr("class");
        $("#prevmsg").attr("class","r").html(msg);

       }else{
        $(this).attr("class","bgwrong");
        $("#prevmsg").attr("class","").html("车主姓名需保持一致");
      
       }
  }).focus(function(){
        $(this).triggerHandler("keyup");
      });

  //验证新车主姓名
  $("#nextid").keyup(function(){
       if($(this).val()==$("#newnameid").val()){
        $(this).removeAttr("class");
        $("#nextmsg").attr("class","").attr("class","r").html(msg);

       }else{
        $(this).attr("class","bgwrong");
        $("#nextmsg").attr("class","").html("车主姓名需保持一致");
        return false;
       }
  }).focus(function(){
        $(this).triggerHandler("keyup");
      });


  $("#form1").submit(function(){
      if(!($("#nextmsg").html()==$("#prevmsg").html()==$("#hetongmsg").html()==$("#nnumsmsg").html()==$("#nidcardmsg").html()==
        $("#newnamemsg").html()==$("#carmsg").html()==$("#numsmsg").html()==$("#idcardmsg").html()==$("#namemsg").html()==msg
        )){
        // $("#nextid").triggerHandler("keyup");
        return false;
      }
      else{ return true;}
  })
})
