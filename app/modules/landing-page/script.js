(function(){
	'use strict';
	var mod = $('#mod-landing-page');

	function slide() {
		mod.find('#community .slick-desktop').slick({
			infinite: true,
			dots: true
		});
		mod.find('#community .slick-mobile .community-content-list').slick({
			infinite: true,
			dots: true
		});
	}
	function popupBanner() {
		mod.find('#popup-banner').on('click', function(event) {
			event.preventDefault();
			helperJs.bzPopup({
				rel: '#popup-banner-content',
				width: 640
			});
		});
	}
	function fixTop() {
		mod.find('#form-register input[type=email]').on('change', function(event) {
			event.preventDefault();
			if ($(this).val() != "") {
				mod.find('#form-register .effect').addClass('to-top-text');
			}
		});
	}
	function scrollForm() {
		mod.find('.to-form').each(function() {
			$(this).on('click', function(event) {
				event.preventDefault();
				var link_href = "#form-register";
				$('html, body').animate({
					scrollTop: $(link_href).offset().top - 20
				}, 1000);
			});
		})
	}

	$(document).ready(function() {
		slide();
		popupBanner();
		fixTop();
		scrollForm();
	});
})();