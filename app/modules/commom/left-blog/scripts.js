(function(){
	'use strict';
	var mod = $('#mod-questionleft');

	function auto() {
		var facebook = mod.find('#facebook-like');
		// facebook.css({
		// 	left: event.pageX - 100,
		// 	top: event.pageY - 100
		// });
	}
	$(document).ready(function(){
	});
	$(document).mousemove(function(event) {
		auto();
	});
})();