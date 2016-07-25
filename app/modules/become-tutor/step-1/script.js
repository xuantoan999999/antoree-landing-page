(function(){
	'use strict';
	var mod = $('#mod-step-1');


	function checkData(avatarUpload,commentTxt) {
		if (avatarUpload == "") return 0;
		return 1;
	}

	function checkDataStep1() {
		mod.find('form').submit(function(event) {
			var avatarUpload = mod.find('.upload').val();

			if (avatarUpload == "") mod.find('#avatar-alert').css('display', 'block');
			else mod.find('#avatar-alert').css('display', 'none');
			event.preventDefault();
		});
	}

	$(document).ready(function() {
		// selectTwo();
		// checkDataStep1();
	});
})();