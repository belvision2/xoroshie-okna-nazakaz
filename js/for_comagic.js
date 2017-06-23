$(document).ready(function(){  
// comagic form start

$( ".comagic_phone" ).on( "click", function() {
	var newComagicPhone = $('.comagic_phone').html();		  
	$( ".comagic_phone" ).parent("a").attr( "href", "tel:"+newComagicPhone+"" );
});

/*
// add new tel in href after replace
function comagicPhoneReplaceInHref() {
  var newComagicPhone = $('.comagic_phone').html();		  
  $( ".comagic_phone" ).parent("a").attr( "href", "tel:"+newComagicPhone+"" );
}
setTimeout(comagicPhoneReplaceInHref, 2000);
*/// Впишите свой номер и мы Вам перезвоним
$('#topperezv_but').click(function()
{		
	var template_tel=$('#form_text_1').val();
	if (template_tel) {
		
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'top_my_vam_perezvonim'}]);
		}			
		setTimeout(function () {
			jQuery('.topperezvvam form').submit();
		}, 1000); // время в мс
	}
	else {
		$('#form_text_1').focus();
	}
});


// Впишите свой номер и мы Вам перезвоним
$('#form_text_1').keypress(function(e) {
    if(e.which == 13) {  //Enter is key 13			
		var template_tel=$('#form_text_1').val();
		if (template_tel) {
			
			$("#loader-wrapper").css("display","block");
			if (comagicYesOrNo == "yes") {
				Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'top_my_vam_perezvonim'}]);
			}			
			setTimeout(function () {
				jQuery('.topperezvvam form').submit();
			}, 1000); // время в мс
		}
		else {
			$('#form_text_1').focus();
		}
		return false;
	}
});
// Успейте купить
$('#uspeykupit_but').click(function()
{		
	var template_tel=$('#form_text_39').val();
	if (template_tel) {
		
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'uspeite_kupit'}]);
		}			
		setTimeout(function () {
			jQuery('.uspeykupitblock form').submit();
		}, 1000); // время в мс
	}
	else {
		$('#form_text_39').focus();
	}
});


// Успейте купить
$('#form_text_39').keypress(function(e) {
    if(e.which == 13) {  //Enter is key 13	
		var template_tel=$('#form_text_39').val();
		if (template_tel) {
			
			$("#loader-wrapper").css("display","block");
			if (comagicYesOrNo == "yes") {
				Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'uspeite_kupit'}]);
			}			
			setTimeout(function () {
				jQuery('.uspeykupitblock form').submit();
			}, 1000); // время в мс
		}
		else {
			$('#form_text_39').focus();
		}
		return false;
	}
});// Не уходите без подарка
$('#ne_uhodite_bez_but').click(function()
{		
	var template_tel=$('#form_text_41').val();
	if (template_tel) {
		
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'ne_uhodite_bez_podarka'}]);
		}			
		setTimeout(function () {
			jQuery('#gift form').submit();
		}, 1000); // время в мс
	}
	else {
		$('#form_text_41').focus();
	}
});


// Не уходите без подарка
$('#form_text_41').keypress(function(e) {
    if(e.which == 13) {  //Enter is key 13		
		var template_tel=$('#form_text_41').val();
		if (template_tel) {
			
			$("#loader-wrapper").css("display","block");
			if (comagicYesOrNo == "yes") {
				Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'ne_uhodite_bez_podarka'}]);
			}			
			setTimeout(function () {
				jQuery('#gift form').submit();
			}, 1000); // время в мс
		}
		else {
			$('#form_text_41').focus();
		}
		return false;
	}
});


// Расчет стоимости
$('#raschet_stoimosti_but').click(function()
{	
	var template_name=$('#form_text_2').val();
	var template_tel=$('#form_text_3').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			Comagic.push(['addOfflineRequest', {name: template_name,  phone: template_tel, message: 'raschet_stoimosti'}]);
		}			
		setTimeout(function () {
			jQuery('form[name=SIMPLE_FORM_2]').submit();
		}, 1000); // время в мс
	}
	else {
		$('#form_text_3').focus();
	}
});

// Обратная связь
$('#obratnaya_svyaz_but').click(function()
{	
	var template_name=$('#form_text_5').val();
	var template_tel=$('#form_text_7').val();
	var template_ema=$('#form_text_6').val();
	if (template_tel || template_ema) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			Comagic.push(['addOfflineRequest', {name: template_name,  phone: template_tel, message: 'obratnaya_svyaz'}]);
		}			
		setTimeout(function () {
			jQuery('form[name=SIMPLE_FORM_3]').submit();
		}, 1000); // время в мс
	}
	else {
		$('#form_text_7').focus();
	}
});


// Отзывы
$('#otzivy_but').click(function()
{	
	var template_name=$('#form_text_10').val();
	if (template_name) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			Comagic.push(['addOfflineRequest', {name: template_name, message: 'otzivy'}]);
		}			
		setTimeout(function () {
			jQuery('form[name=SIMPLE_FORM_4]').submit();
		}, 1000); // время в мс
	}
	else {
		$('#form_text_10').focus();
	}
});


// Оформление заказа
$('#zakaz_but').click(function()
{	
	var template_name=$('#form_text_20').val();
	var template_tel=$('#form_text_17').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			Comagic.push(['addOfflineRequest', {name: template_name,  phone: template_tel, message: 'zakaz'}]);
		}			
		setTimeout(function () {
			jQuery('form[name=SIMPLE_FORM_5]').submit();
		}, 1000); // время в мс
	}
	else {
		$('#form_text_17').focus();
	}
});


// СМС-купон на скидку
$('#sms_kupon_na_skidku_but').click(function()
{	
	var template_tel=$('#form_text_21').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'sms_kupon_na_skidku'}]);
		}			
		setTimeout(function () {
			jQuery('form[name=SIMPLE_FORM_6]').submit();
		}, 1000); // время в мс
	}
	else {
		$('#form_text_21').focus();
	}
});


// СМС-купон на скидку
$('#form_text_21').keypress(function(e) {
    if(e.which == 13) {  //Enter is key 13
		var template_tel=$('#form_text_21').val();
		if (template_tel) {
			$("#loader-wrapper").css("display","block");
			if (comagicYesOrNo == "yes") {
				Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'sms_kupon_na_skidku'}]);
			}			
			setTimeout(function () {
				jQuery('form[name=SIMPLE_FORM_6]').submit();
			}, 1000); // время в мс
		}
		else {
			$('#form_text_21').focus();
		}
		return false;
	}
});// Вызвать замерщика
$('#vizvat_zamershika_but').click(function()
{	
	var template_name=$('#form_text_22').val();
	var template_tel=$('#form_text_23').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			Comagic.push(['addOfflineRequest', {name: template_name,  phone: template_tel, message: 'vizvat_zamershika'}]);
		}			
		setTimeout(function () {
			jQuery('form[name=SIMPLE_FORM_7]').submit();
		}, 1000); // время в мс
	}
	else {
		$('#form_text_23').focus();
	}
});
// Заказ обратного звонка
$('#zakazat_obr_zvonok_but').click(function()
{	
	var template_name=$('#form_text_25').val();
	var template_tel=$('#form_text_26').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			Comagic.push(['addOfflineRequest', {name: template_name,  phone: template_tel, message: 'zakazat_obr_zvonok'}]);
		}			
		setTimeout(function () {
			jQuery('form[name=SIMPLE_FORM_8]').submit();
		}, 1000); // время в мс
	}
	else {
		$('#form_text_26').focus();
	}
});// Письмо директору
$('#pismo_directoru_but').click(function()
{	
	var template_name=$('#form_text_28').val();
	var template_tel=$('#form_text_29').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			Comagic.push(['addOfflineRequest', {name: template_name,  phone: template_tel, message: 'pismo_directoru'}]);
		}			
		setTimeout(function () {
			jQuery('form[name=SIMPLE_FORM_9]').submit();
		}, 1000); // время в мс
	}
	else {
		$('#form_text_29').focus();
	}
});


// Вы зашли вовремя
$('#zashli_vovremya_but').click(function()
{	
	var template_name=$('#form_text_32').val();
	var template_tel=$('#form_text_33').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			Comagic.push(['addOfflineRequest', {name: template_name,  phone: template_tel, message: 'zashli_vovremya'}]);
		}			
		setTimeout(function () {
			jQuery('form[name=SIMPLE_FORM_10]').submit();
		}, 1000); // время в мс
	}
	else {
		$('#form_text_33').focus();
	}
});


// Заявка на скидку
$('#zayavka_na_skidku_but').click(function()
{	
	var template_name=$('#form_text_35').val();
	var template_tel=$('#form_text_36').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			Comagic.push(['addOfflineRequest', {name: template_name,  phone: template_tel, message: 'zayavka_na_skidku'}]);
		}			
		setTimeout(function () {
			jQuery('form[name=SIMPLE_FORM_11]').submit();
		}, 1000); // время в мс
	}
	else {
		$('#form_text_36').focus();
	}
});


// Перезвоним за 50 секунд
$('#perezvonim_za_50_sec_but').click(function()
{	
	var template_name=$('#form_text_37').val();
	var template_tel=$('#form_text_38').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			Comagic.push(['addOfflineRequest', {name: template_name,  phone: template_tel, message: 'perezvonim_za_50_sec'}]);
		}			
		setTimeout(function () {
			jQuery('form[name=SIMPLE_FORM_12]').submit();
		}, 1000); // время в мс
	}
	else {
		$('#form_text_38').focus();
	}
});


// Перезвоним за 50 секунд
$('#ModalZapisNa_but').click(function()
{	
	var template_tel=$('#form_text_42').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		if (comagicYesOrNo == "yes") {
			Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'zapis_na_besplatiy_zamer_fly'}]);
		}			
		setTimeout(function () {
			jQuery('form[name=SIMPLE_FORM_15]').submit();
		}, 1000); // время в мс
	}
	else {
		$('#form_text_42').focus();
	}
});// Перезвоним за 50 секунд
$('#form_text_42').keypress(function(e) {
    if(e.which == 13) {  //Enter is key 13	
		var template_tel=$('#form_text_42').val();
		if (template_tel) {
			$("#loader-wrapper").css("display","block");
			if (comagicYesOrNo == "yes") {
				Comagic.push(['addOfflineRequest', {phone: template_tel, message: 'zapis_na_besplatiy_zamer_fly'}]);
			}			
			setTimeout(function () {
				jQuery('form[name=SIMPLE_FORM_15]').submit();
			}, 1000); // время в мс
		}
		else {
			$('#form_text_42').focus();
		}
		return false;
	}
});

//template_ceo
/*
$('#b_contact_ceo_but260').click(function()
{	
	var template_name=$('#form_text_12').val();
	var template_tel=$('#form_text_13').val();
	if (template_tel) {
		$("#loader-wrapper").css("display","block");
		Comagic.push(['addOfflineRequest', {name: template_name,  phone: template_tel, message: 'pismo_directoru'}]);	
		setTimeout(function () {
			jQuery('.b_contact_ceo_form form').submit();
		}, 1000); // время в мс
	}
	else {
		$('#form_text_13').focus();
	}
});
*/// comagic form end


});