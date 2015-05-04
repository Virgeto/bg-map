//***********************************************
//* Autor: Vassil Dimitrov                      *
//* Date: 24.02.2015                            *
//* Last changes at:                 *
//***********************************************

$(document).ready(function () {

		$('.imag').fancybox({
			'transitionIn'	:	'elastic',
			'transitionOut'	:	'elastic',
			'speedIn'		:	600, 
			'speedOut'		:	200, 
			'overlayShow'	:	false
		});

		$('.full-map').fancybox({
	        	type: "iframe"
		});


isNumber('total-amount');
regionName();

function isNumber(obj) {

	var totalAmount = $("." + obj);

	totalAmount.on('blur', function(){
	    var value = totalAmount.val()
	    var regex = new RegExp(/^\+?[0-9(),.-]+$/);
	    if(value.match(regex)) {
	    	$('.total-amount').removeClass('error').addClass('succes');
	    	$('.err').hide();
	    	$('.text').html($('.total-amount').val());
	    }else {
	    	$('.total-amount').removeClass('succes').addClass('error');
	    	$('.err').show();
	    	$('.text').html('0');
		}
	});
}

function regionName(){
	var region = $('.st0');
	var regionName = $('.region-name');
	var regionId = region.attr('id');
	console.log(regionId);

	$.each(region, function(){
		var singleRegion = $(this);

    singleRegion.hover(function(e){
      var mouseX = e.pageX; 
      var mouseY = e.pageY;
      var singleName = $(this).attr('id');

       $('body').append('<span id="message" class="label" style="text-align:center;background:#fff;box-shadow: 0px 1px 5px 1px #888">alert</span>');
       $('#message').css({'top':mouseY+20,'left':mouseX+10});
       $('#message').text(singleName);
	    },function(){
	    	$('#message').remove();
	    }
	);

		singleRegion.on('click', function(){
			var singleRegions = $(this);
			var name = $(this).attr('id');

			regionName.text(name);

			$('.active').attr('class', 'st0 inactive');

			singleRegions.attr('class', 'active');
			// singleRegions.classList.add("active");
     		// singleRegions.setAttribute("class", "active");
			// singleRegions.css({fill:'#70F752'});
			// singleRegions.addClass('active');


			switch(name) {
			    case "Варна":
			    	$('.region').hide();
			        $('#varna').show(100);
			        break;
			    case "Бургас":
			    	$('.region').hide();
			        $('#Burgas').show(100);
			        break;
		        case "Добрич":
			    	$('.region').hide();
			        $('#Dobrich').show(100);
			        break;
		        case "Ямбол":
			    	$('.region').hide();
			        $('#Yambol').show(100);
			        break;
			    case "Силистра":
			    	$('.region').hide();
			        $('#Silistra').show(100);
			        break;
			    case "Шумен":
			    	$('.region').hide();
			        $('#Shumen').show(100);
			        break;
		        case "Хасково":
			    	$('.region').hide();
			        $('#Haskovo').show(100);
			        break;
		        case "Разград":
			    	$('.region').hide();
			        $('#Razgrad').show(100);
			        break;
		        case "Търговище":
			    	$('.region').hide();
			        $('#Turgovishte').show(100);
			        break;
		        case "Сливен":
			    	$('.region').hide();
			        $('#Sliven').show(100);
			        break;
		        case "Русе":
			    	$('.region').hide();
			        $('#Ruse').show(100);
			        break;
		        case "Велико Търново":
			    	$('.region').hide();
			        $('#Veliko_Turnovo').show(100);
			        break;
		        case "Стара загора":
			    	$('.region').hide();
			        $('#Stara_zagora').show(100);
			        break;
		        case "Кърджали":
			    	$('.region').hide();
			        $('#Kurjali').show(100);
			        break;
		        case "Смолян":
			    	$('.region').hide();
			        $('#Smolian').show(100);
			        break;
		        case "Габрово":
			    	$('.region').hide();
			        $('#Gabrovo').show(100);
			        break;
		        case "Плевен":
			    	$('.region').hide();
			        $('#Pleven').show(100);
			        break;
		        case "Ловеч":
			    	$('.region').hide();
			        $('#Lovech').show(100);
			        break;
		        case "Враца":
			    	$('.region').hide();
			        $('#Vratsa').show(100);
			        break;
		        case "Монтана":
			    	$('.region').hide();
			        $('#Montana').show(100);
			        break;
		        case "Видин":
			    	$('.region').hide();
			        $('#Vidin').show(100);
			        break;
		        case "Благоевград":
			    	$('.region').hide();
			        $('#Blagoevgrad').show(100);
			        break;
		        case "Кюстендил":
			    	$('.region').hide();
			        $('#Kiustendil').show(100);
			        break;
		        case "София":
			    	$('.region').hide();
			        $('#Sofia').show(100);
			        break;
		        case "Перник":
			    	$('.region').hide();
			        $('#Pernik').show(100);
			        break;
		        case "Пазарджик":
			    	$('.region').hide();
			        $('#Pazardjik').show(100);
			        break;
		        case "Пловдив":
			    	$('.region').hide();
			        $('#Plovdiv').show(100);
			        break;
			}
	});
	});
}

});