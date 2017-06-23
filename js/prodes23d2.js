function simple_tooltip(target_items, name){
	 $(target_items).each(function(i){
		 $("body").append("<div class='"+name+"' id='"+name+i+"'><p>"+$(this).attr('title')+"</p></div>");
		 var my_tooltip = $("#"+name+i);
		
		 $(this).removeAttr("title").mouseover(function(){
		 my_tooltip.css({opacity:0.9, display:"none"}).fadeIn(400);
		 }).mousemove(function(kmouse){
		 my_tooltip.css({left:kmouse.pageX+15, top:kmouse.pageY-60});
		 }).mouseout(function(){
	 		my_tooltip.fadeOut(400);
	 	});
	 });
}

$(document).ready(function(){  

	
$(".prozamer2").click(function () { 
	$(".scchasgrey2").css("display","block");
});

$(".scchasblockclose2").click(function () { 
	$(".scchasgrey2").css("display","none");
}); simple_tooltip("a.toolt","tooltip");

 $(".menurazd").children("div").hover(function () {
			$(this).children(".aa1").css({'display' : ''});
		 }, 
					  function () {
			$(this).children(".aa1").css({'display' : 'none'});
			
		});
		
		$(".aa1").hover(function () {
			$(this).css({'display' : ''});
		 }, 
					  function () {
			$(this).css({'display' : 'none'});
		});$(".top1mob").hover(function () {
			$(this).children(".aa1").css({'display' : ''});
			
			
			
			
		}, 
		function () {
			$(this).children(".aa1").css({'display' : 'none'});
			
		});
		
		$(".top1mob .aa1").hover(function () {
			$(this).css({'display' : ''});
		}, 
		function () {
			$(this).css({'display' : 'none'});
		});	

$(".proobr").click(function () { 
	$(".popgrey").css("display","block");
});


$(".popblockclose").click(function () { 
	$(".popgrey").css("display","none");
});  
  
 
	


//высплывыющие меню при выборе типов окон		

 $(".tipokna1").hover(function () {
			$(".popok1").css({'display' : ''});
		 }, 
					  function () {
			$(".popok1").css({'display' : 'none'});
		});
		
$(".popok1").hover(function () {
			$(".popok1").css({'display' : ''});
		 }, 
					  function () {
			$(".popok1").css({'display' : 'none'});
		});
		
		
		
		
$(".tipokna2").hover(function () {
			$(".popok2").css({'display' : ''});
		 }, 
					  function () {
			$(".popok2").css({'display' : 'none'});
		});
		
$(".popok2").hover(function () {
			$(".popok2").css({'display' : ''});
		 }, 
					  function () {
			$(".popok2").css({'display' : 'none'});
		});
		
		
		
		
$(".tipokna3").hover(function () {
			$(".popok3").css({'display' : ''});
		 }, 
					  function () {
			$(".popok3").css({'display' : 'none'});
		});
		
$(".popok3").hover(function () {
			$(".popok3").css({'display' : ''});
		 }, 
					  function () {
			$(".popok3").css({'display' : 'none'});
		});
		
		
		
$(".tipokna4").hover(function () {
			$(".popok4").css({'display' : ''});
		 }, 
					  function () {
			$(".popok4").css({'display' : 'none'});
		});
		
		
$(".popok4").hover(function () {
			$(".popok4").css({'display' : ''});
		 }, 
					  function () {
			$(".popok4").css({'display' : 'none'});
		});
		

		
		
	
	
	
	
	
	
// убираем рамку выделение с выбранных ранее типов окон	
$(".tipoknapopcenter img").click(function () {
			$('.tabletipokna img').removeClass('okact');
			
		 });		
		
	
	
$(".ok1_1").click(function () {
			$('.tipokna1').html('<img src="/img/ok1_1.gif"  class="okact">');
			$('.oknofull').html('<img src="../img/calc/plast/1_1.png" >');
			$('.oknofullder').html('<img src="../img/calc/der/1_1.html" >');
		 });
$(".ok1_2").click(function () {
			$('.tipokna1').html('<img src="/img/ok1_2.gif"  class="okact">');
			$('.oknofull').html('<img src="../img/calc/plast/1_2.png" >');
			$('.oknofullder').html('<img src="../img/calc/der/1_2.html" >');
		 });
$(".ok1_3").click(function () {
			$('.tipokna1').html('<img src="/img/ok1_3.gif"  class="okact">');
			$('.oknofull').html('<img src="../img/calc/plast/1_3.png" >');
			$('.oknofullder').html('<img src="../img/calc/der/1_3.html" >');
		 });
$(".ok1_4").click(function () {
			$('.tipokna1').html('<img src="/img/ok1_4.gif"  class="okact">');
			$('.oknofull').html('<img src="../img/calc/plast/1_4.png" >');
			$('.oknofullder').html('<img src="../img/calc/der/1_4.html" >');
		 });
		 
		 
		 
$(".ok2_1").click(function () {
			$('.tipokna2').html('<img src="/img/ok2_1.gif"  class="okact">');
			$('.oknofull').html('<img src="../img/calc/plast/2_1.png" >');
			$('.oknofullder').html('<img src="../img/calc/der/2_1.html" >');
		 });
$(".ok2_2").click(function () {
			$('.tipokna2').html('<img src="/img/ok2_2.gif"  class="okact">');
			$('.oknofull').html('<img src="../img/calc/plast/2_2.png" >');
			$('.oknofullder').html('<img src="../img/calc/der/2_2.html" >');
		 });
$(".ok2_3").click(function () {
			$('.tipokna2').html('<img src="/img/ok2_3.gif" class="okact">');
			$('.oknofull').html('<img src="../img/calc/plast/2_3.png" >');
			$('.oknofullder').html('<img src="../img/calc/der/2_3.html" >');
		 });
$(".ok2_4").click(function () {
			$('.tipokna2').html('<img src="/img/ok2_4.gif"  class="okact">');
			$('.oknofull').html('<img src="../img/calc/plast/2_4.png" >');
			$('.oknofullder').html('<img src="../img/calc/der/2_4.html" >');
		 });
		 
		 

$(".ok3_1").click(function () {
			$('.tipokna3').html('<img src="/img/ok3_1.gif"  class="okact">');
			$('.oknofull').html('<img src="../img/calc/plast/3_1.png" >');
			$('.oknofullder').html('<img src="../img/calc/der/3_1.html" >');
		 });
$(".ok3_2").click(function () {
			$('.tipokna3').html('<img src="/img/ok3_2.gif"  class="okact">');
			$('.oknofull').html('<img src="../img/calc/plast/3_2.png" >');
			$('.oknofullder').html('<img src="../img/calc/der/3_2.html" >');
		 });
$(".ok3_3").click(function () {
			$('.tipokna3').html('<img src="/img/ok3_3.gif"  class="okact">');
			$('.oknofull').html('<img src="../img/calc/plast/3_3.png" >');
			$('.oknofullder').html('<img src="../img/calc/der/3_3.html" >');
		 });
$(".ok3_4").click(function () {
			$('.tipokna3').html('<img src="/img/ok3_4.gif"  class="okact">');
			$('.oknofull').html('<img src="../img/calc/plast/3_4.png" >');
			$('.oknofullder').html('<img src="../img/calc/der/3_4.html" >');
		 });
	
	
	
$(".ok4_1").click(function () {
			$('.tipokna4').html('<img src="/img/ok4_1.gif"  class="okact">');
			$('.oknofull').html('<img src="../img/calc/plast/4_1.png" >');
			$('.oknofullder').html('<img src="../img/calc/der/4_1.html" >');
		 });
$(".ok4_2").click(function () {
			$('.tipokna4').html('<img src="/img/ok4_2.gif"  class="okact">');
			$('.oknofull').html('<img src="../img/calc/plast/4_2.png" >');
			$('.oknofullder').html('<img src="../img/calc/der/4_2.html" >');
		 });		
	
	
$(".tipbalk1").click(function () {
			$('img.qqq').removeClass('okact');
			$('.tipbalk1').html('<img src="/img/calc/balk/1_.png"  class="okact qqq">');
			$('.oknofullbalk').html('<img src="../img/calc/balk/1.png" >');
		 });
		 
$(".tipbalk2").click(function () {
			$('img.qqq').removeClass('okact');
			$('.tipbalk2').html('<img src="/img/calc/balk/2_.png"  class="okact qqq">');
			$('.oknofullbalk').html('<img src="../img/calc/balk/2.png" >');
		 });
		 
$(".tipbalk3").click(function () {
			$('img.qqq').removeClass('okact');
			$('.tipbalk3').html('<img src="/img/calc/balk/3_.png"  class="okact qqq">');
			$('.oknofullbalk').html('<img src="../img/calc/balk/3.png" >');
		 });
		 
$(".tipbalk4").click(function () {
			$('img.qqq').removeClass('okact');
			$('.tipbalk4').html('<img src="/img/calc/balk/4_.png"  class="okact  qqq">');
			$('.oknofullbalk').html('<img src="../img/calc/balk/4.png" >');
		 });
		 
$(".tipbalk5").click(function () {
			$('img.qqq').removeClass('okact');
			$('.tipbalk5').html('<img src="/img/calc/balk/5_.png"  class="okact qqq">');
			$('.oknofullbalk').html('<img src="../img/calc/balk/5.png" >');
		 });
		 
$(".tipbalk6").click(function () {
			$('img.qqq').removeClass('okact');
			$('.tipbalk6').html('<img src="/img/calc/balk/6_.png"  class="okact qqq">');
			$('.oknofullbalk').html('<img src="../img/calc/balk/6.png" >');
		 });
		 
$(".tipbalk7").click(function () {
			$('img.qqq').removeClass('okact');
			$('.tipbalk7').html('<img src="/img/calc/balk/7_.png"  class="okact qqq">');
			$('.oknofullbalk').html('<img src="../img/calc/balk/7.png" >');
		 });

		 $(".prozamer").click(function () { 
	$(".zamergrey").css("display","block");
});


$(".zamerblockclose").click(function () { 
	$(".zamergrey").css("display","none");
});  	
	
	
	
	

$('.blvzam').click(function(){
										 $('.blvzam').removeClass('menuzamer').addClass('menuzameract');
										 $('.blzakazzv').removeClass('menuzameract').addClass('menuzamer');
										 $('.blockperezv').css("display","none");
										 $('.blockzamer').css("display","block");
										 
										 
									 });
									 
									 
									 $('.blzakazzv').click(function(){
										 $('.blzakazzv').removeClass('menuzamer').addClass('menuzameract');
										 $('.blvzam').removeClass('menuzameract').addClass('menuzamer');
										 $('.blockzamer').css("display","none");
										 $('.blockperezv').css("display","block");
									 });$(".scchasblockclose").click(function () { 
	$(".scchasgrey").css("display","none");
});

$(".kuponclose").click(function () { 
	$(".kupongrey").css("display","none");
});


	$(function($) {
   var time = new Date();
    $('.calend_bg_den').html(time.getDate());
    

});	
		
		$(function($) {
  var time = new Date();
    var target_time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
    target_time = target_time.valueOf()+1000*60*60*24;
    var tomorrow = new Date(target_time);
    var months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    $('.calend_bg_mesyats').html(months[tomorrow.getMonth()]);
    

});			
	
		
		
$(".phonemask").mask("+375 (99) 999-99-99");


});