(function(){
	'use strict';
	var mod = $('#mod-tutor-profile');

	function selectTwo() {
	 	mod.find('#select-skill').select2();
	}

	function closeAlert() {
	 	mod.find('#close-btn').on('click', function(event) {
	 		event.preventDefault();
	 		mod.find('#message-alert').css('display', 'none');
	 	});
	}
	$(document).ready(function(){
	 	selectTwo();
	 	closeAlert();
	});
})();