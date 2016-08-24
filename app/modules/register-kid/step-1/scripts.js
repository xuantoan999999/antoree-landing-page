(function(){
	'use strict';
	var mod = $('#mod-step-1');

	function toTop() {
		mod.find('input[type=email]').on('change', function(event) {
			event.preventDefault();
			if ($(this).val() != "") {
				mod.find('.effect').addClass('to-top-text');
			}
			else{
				mod.find('.effect').removeClass('to-top-text');
			}
		});
	}
	$(document).ready(function() {
		toTop();
	});
})();