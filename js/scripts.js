
jQuery(document).ready(function($){
	

	$('.menu-search-area span#submit').click(function(e){
		console.log("i am clicked");
		$('nav.main-menu form#searchform').trigger('submit');
	});

	// $('div#menubar').scrollToFixed({
	// 	minWidth : '700',
	// });

	$('span#menu-toggler').click(function(){
		console.log("clicked");
		var mobile_nav = $('nav.mobile-nav');
		mobile_nav.slideToggle();
	});

	$('li#userMenuToggler').click(function(){
		var company_nav = $('nav#companyNav');
		company_nav.slideToggle();
	});

	$('#search-toggler').click(function(){
		console.log("clicked");
		var buttom_search_container = $('#buttom-search-container');
		buttom_search_container.slideToggle();
	});
	//$('#loggedin-settings-button').click(function(){
	//	var loggedin_settings_list = $('#loggedin-settings-list');
	//	//loggedin_settings_list.toggleClass('active');
	//	loggedin_settings_list.fadeToggle();
	//});
	$('.hidden-content span.slidetoggler').click(function(){
		var hidden_content = $(this).parent().children('ul.info-desc');
		console.log(hidden_content);
		hidden_content.toggleClass('slidedown');
	});
	//$('#lockSettingButton').click(function(){
	//	var dropdown_menu = $('#lockSettingList');
	//	dropdown_menu.fadeToggle();
	//});

	var fa_th_large = $('#fa-th-large');
	var fa_times = $("#fa-times");
	$('#f-toggler').click(function(){
		var side_columns_container = $('#side-columns-container');
		side_columns_container.toggleClass('show-side');
		fa_times.toggleClass('current');
		fa_th_large.toggleClass('current');
	});

	var side_followers_container = $('#side-followers-container');
	var side_important_apps = $('#side-important-apps');
	var side_followers_toggler = $('#side-followers-toggler');
	var side_apps_toggler = $('#side-apps-toggler');

	side_followers_toggler.click(function(event){
		event.preventDefault();
		side_important_apps.removeClass('current');
		side_followers_container.addClass('current');
		side_apps_toggler.removeClass('active');
		side_followers_toggler.addClass('active');

	});

	side_apps_toggler.click(function(event){
		event.preventDefault();
		side_followers_container.removeClass('current');
		side_important_apps.addClass('current');
		side_followers_toggler.removeClass('active');
		side_apps_toggler.addClass('active');

	});

	if(typeof $.fn.hide_site_section !== 'undefined') {
		$('#hideFooter').hide_site_section({
				togglerID: 'hideFooterToggler',
				sectionName: "Footer"
			}
		);
	}



	if(typeof $.fn.owlCarousel !== 'undefined') {
		$('.owl-carousel').owlCarousel({
			margin: 10,
			//loop:true,
			autoWidth: true,
			//rtl:true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 5,
					nav: false,
					loop: false,
					mouseDrag: true,
					touchDrag: true,
				},
				700: {
					items: 13,
					nav: false,
					loop: false,
					mouseDrag: false,
					touchDrag: false,

				},

			}
		});
	}
	if(typeof $.fn.sliderPro !== 'undefined') {
		$('#offer-slider').sliderPro({
			width: '100%',
			height: '400',
			arrows: true,
			buttons: false,
			waitForLayers: true,
			fade: true,
			autoplay: true,
			autoScaleLayers: true,
			loop: true,
			fullScreen: true,
			breakpoints: {
				600: {
					height: '240'
				}

			}
		});
	}
	if(typeof $.fn.gallery !== 'undefined') {
		$('#dg-container').gallery({
			current: 0,
			autoplay: true,
			interval: 2000
		});
	}


	var changeLayout = function(){
		var window_width = $(window).innerWidth();
		var secondary = $('#singleOfferSecondary');
		//var comments_container = $('.comments-container');
		var primary = $('#singleOfferPrimary');
		var secondary_mobile_place = primary.children('.secondary-mobile-place');
		var single_offer_content = $('.single-offer-content');
		var single_offer_section = single_offer_content.children('section.layout');

		if(window_width < 700){

			secondary_mobile_place.append(secondary).show();
		} else {
			secondary_mobile_place.hide();
			single_offer_section.append(secondary);
		}
	};

	changeLayout();

	$(window).resize(function(){
		changeLayout();
	});

});
		