(function(){
	'use strict';
	var mod = $('#mod-landing-page');

	// function popupAds() {
	// 	mod.find('#popup-ad button#popup').on('click', function(event) {
	// 		event.preventDefault();
	// 		helperJs.bzPopup({
	// 			rel: '#popup-ads',
	// 			width: 700
	// 		});
	// 	});
	// 	setTimeout(function() {
	// 		mod.find('#popup-ad button#popup').trigger('click');
	// 	},10000);
	// }
	function formatDate(time) {
		var date = {};
		date.day = parseInt(time / 86400);
		var dayTime = time - date.day * 86400;
		date.hour = parseInt(dayTime / 3600);
		var hourTime = dayTime - date.hour * 3600;
		date.minute = parseInt(hourTime / 60);
		var minuteTime = hourTime - date.minute * 60;
		date.second = minuteTime;
		return date;
	}
	function formatTime(timeString) {
		if (timeString < 10) {
			return "0" + timeString;
		}
		return timeString;
	}
	function time() {
		var time = parseInt($('#time-clock').attr('data-time'));
		setInterval(function() {
			if (time > 0) {
				var date = formatDate(time);
				mod.find('.clock .day').html(formatTime(date.day));
				mod.find('.clock .hour').html(formatTime(date.hour));
				mod.find('.clock .minute').html(formatTime(date.minute));
				mod.find('.clock .second').html(formatTime(date.second));
			}
			time --;
		},1000);
	}

	$(document).ready(function() {
		// popupAds();
		time();
	});
})();