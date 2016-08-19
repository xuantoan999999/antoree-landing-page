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

	function bestTeacher() {
		mod.find('.teacher-grid-list').gridderExpander({
			scroll: false,
			animationSpeed: 400,
			animationEasing: "easeInOutExpo",
			nextText: "",
			prevText: "",
			closeText: "",
			onStart: function(){
	            //Gridder Inititialized
	        },
	        onContent: function(){
	            //Gridder Content Loaded
	        },
	        onClosed: function(){
	            //Gridder Closed
	        }
	    });

	}
	function maxHeigthLearn() {
		var maxHeight = 0;
		mod.find('.head-learn .h3Title').each(function(index) {
			if($(this).height() > maxHeight){
				maxHeight = $(this).height();
			}
			// console.log($(this).height());
		})
		mod.find('.head-learn .h3Title').each(function(index) {
			$(this).height(maxHeight);
		})
	}
	$(document).ready(function() {
		activePopup();
		addSuKienVaoButtons();
		popupBanner();
		popupAds();
		bestTeacher();
		maxHeigthLearn();
	});
})();