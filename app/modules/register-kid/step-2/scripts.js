(function(){
	'use strict';
	var mod = $('#mod-step-2');

	function toTop2() {
		mod.find('select.input-no-border').on('change', function(event) {
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
		toTop2();
	});
})();