/**
 * @name		jQuery Countdown Plugin
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/12/countdown-jquery/
 * @license		MIT License
 */
jQuery(document).ready(function() {
				
			$('.zoom-gallery li').css("display","block");
					
			});
(function($){
	
	// РљРѕР»РёС‡РµСЃС‚РІРѕ СЃРµРєСѓРЅРґ РІ РєР°Р¶РґРѕРј РІСЂРµРјРµРЅРЅРѕРј РѕС‚СЂРµР·РєРµ
	var days	= 24*60*60,
		hours	= 60*60,
		minutes	= 60;
	
	// РЎРѕР·РґР°РµРј РїР»Р°РіРёРЅ
	$.fn.countdown = function(prop){
		
		var options = $.extend({
			callback	: function(){},
			timestamp	: 0
		},prop);
		
		var left, d, h, m, s, positions;

		// РёРЅРёС†РёР°Р»РёР·РёСЂСѓРµРј РїР»Р°РіРёРЅ
		init(this, options);
		
		positions = this.find('.position');
		
		(function tick(){
			
			// РћСЃС‚Р°Р»РѕСЃСЊ РІСЂРµРјРµРЅРё
			left = Math.floor((options.timestamp - (new Date())) / 1000);
			
			if(left < 0){
				left = 0;
			}
			
			// РћСЃС‚Р°Р»РѕСЃСЊ РґРЅРµР№
			d = Math.floor(left / days);
			updateDuo(0, 1, d);
			left -= d*days;
			
			// РћСЃС‚Р°Р»РѕСЃСЊ С‡Р°СЃРѕРІ
			h = Math.floor(left / hours);
			updateDuo(2, 3, h);
			left -= h*hours;
			
			// РћСЃС‚Р°Р»РѕСЃСЊ РјРёРЅСѓС‚
			m = Math.floor(left / minutes);
			updateDuo(4, 5, m);
			left -= m*minutes;
			
			// РћСЃС‚Р°Р»РѕСЃСЊ СЃРµРєСѓРЅРґ
			s = left;
			updateDuo(6, 7, s);
			
			// Р’С‹Р·С‹РІР°РµРј РІРѕР·РІСЂР°С‚РЅСѓСЋ С„СѓРЅРєС†РёСЋ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ
			options.callback(d, h, m, s);
			
			// РџР»Р°РЅРёСЂСѓРµРј СЃР»РµРґСѓСЋС‰РёР№ РІС‹Р·РѕРІ РґР°РЅРЅРѕР№ С„СѓРЅРєС†РёРё С‡РµСЂРµР· 1 СЃРµРєСѓРЅРґСѓ
			setTimeout(tick, 1000);
		})();
		
		// Р”Р°РЅРЅР°СЏ С„СѓРЅРєС†РёСЏ РѕР±РЅРѕРІР»СЏРµС‚ РґРІРµ С†РёС„РѕСЂРѕРІС‹Рµ РїРѕР·РёС†РёРё Р·Р° РѕРґРёРЅ СЂР°Р·
		function updateDuo(minor,major,value){
			switchDigit(positions.eq(minor),Math.floor(value/10)%10);
			switchDigit(positions.eq(major),value%10);
		}
		
		return this;
	};


	function init(elem, options){
		elem.addClass('countdownHolder');

		// РЎРѕР·РґР°РµРј СЂР°Р·РјРµС‚РєСѓ РІРЅСѓС‚СЂРё РєРѕРЅС‚РµР№РЅРµСЂР°
		$.each(['Days','Hours','Minutes','Seconds'],function(i){
			$('<span class="count'+this+'">').html(
				'<span class="position">\
					<span class="digit static">0</span>\
				</span>\
				<span class="position">\
					<span class="digit static">0</span>\
				</span>'
			).appendTo(elem);
			
			if(this!="Seconds"){
				elem.append('<span class="countDiv countDiv'+i+'"></span>');
			}
		});

	}

	// РЎРѕР·РґР°РµРј Р°РЅРёРјРёСЂРѕРІР°РЅРЅС‹Р№ РїРµСЂРµС…РѕРґ РјРµР¶РґСѓ РґРІСѓРјСЏ С†РёС„СЂР°РјРё
	function switchDigit(position,number){
		
		var digit = position.find('.digit')
		
		if(digit.is(':animated')){
			return false;
		}
		
		if(position.data('digit') == number){
			// РњС‹ СѓР¶Рµ РІС‹РІРµР»Рё РґР°РЅРЅСѓСЋ С†РёС„СЂСѓ
			return false;
		}
		
		position.data('digit', number);
		
		var replacement = $('<span>',{
			'class':'digit',
			css:{
				top:'-2.1em',
				opacity:0
			},
			html:number
		});
		
		// РљР»Р°СЃСЃ .static РґРѕР±Р°РІР»СЏРµС‚СЃСЏ, РєРѕРіРґР° Р·Р°РІРµСЂС€Р°РµС‚СЃСЏ Р°РЅРёРјР°С†РёСЏ.
		// Р’С‹РїРѕР»РЅРµРЅРёРµ РёРґРµС‚ Р±РѕР»РµРµ РїР»Р°РІРЅРѕ.
		
		digit
			.before(replacement)
			.removeClass('static')
			.animate({top:'2.5em',opacity:0},'fast',function(){
				digit.remove();
			})

		replacement
			.delay(100)
			.animate({top:0,opacity:1},'fast',function(){
				replacement.addClass('static');
			});
	}
})(jQuery);