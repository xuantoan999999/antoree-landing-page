(function(){
	'use strict';
	var mod = $('#mod-landing-page');

	function slide() {
		mod.find('#community .community-content-list').slick({
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

	$(document).ready(function() {
		// slide();
		popupBanner();
		fixTop();
	});
})();