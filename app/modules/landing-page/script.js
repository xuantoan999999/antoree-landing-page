(function(){
	'use strict';
	var mod = $('#mod-landing-page');

	function activePopup(){
		mod.find('#imagespopup').magnificPopup({type:'image'});
	}

	function addSuKienVaoButtons(){

		mod.find('#btDangKyODuoi').on('click',function(event){
			ga('send','event', 'RegisterLandingPage', 'ClickTrialRegisterButton');
		});
	}

	function popupBanner() {
		if (mod.length>0) {
			// var player = mod.find('#popup-banner iframe');
			// var src = player[0].src;
			mod.find('#youtube-1').on('click', function(event) {
				event.preventDefault();
				// player[0].src = src+"?autoplay=1";
				helperJs.bzPopup({
					rel: '#popup-banner',
					width: 640
					// close: function() {
						// player[0].src = src;
					// }
				});
			});
		}
	}

	function popupAds() {
		mod.find('#popup-ad button#popup').on('click', function(event) {
			event.preventDefault();
			helperJs.bzPopup({
				rel: '#popup-ads',
				width: 700
			});
		});
		setTimeout(function() {
			mod.find('#popup-ad button#popup').trigger('click');
		},10000);
	}
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
		var time = parseInt($('#time-clock').attr('time'));
		setInterval(function() {
			if (time > 0) {
				var date = formatDate(time);
				mod.find('.day').html(formatTime(date.day));
				mod.find('.hour').html(formatTime(date.hour));
				mod.find('.minute').html(formatTime(date.minute));
				mod.find('.second').html(formatTime(date.second));
			}
			time --;
		},1000);
	}

	$(document).ready(function() {
		activePopup();
		addSuKienVaoButtons();
		popupBanner();
		popupAds();
		time();
	});
})();