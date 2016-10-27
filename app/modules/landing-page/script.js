(function(){
	'use strict';
	var mod = $('#mod-landing-page');

	function clients(){
		mod.find("#clients .list").slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			arrow:false,
			dots: false
		});
	}
	function partner(){
		mod.find("#partner .list").slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrow:false,
			dots: false
		});
	}
	// function slideMedia() {
	// 	mod.find('#media .table').slick({
	// 		slidesToShow: 4,
	// 		slidesToScroll: 1,
	// 		autoplay: true,
	// 		autoplaySpeed: 2000,
	// 		infinite: true,
	// 		variableWidth: true,
	// 		responsive: [
	// 		{
	// 			breakpoint: 991,
	// 			settings: {
	// 				slidesToShow: 3,
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 1
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 450,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1
	// 			}
	// 		}
	// 		]
	// 	});
	// }

	// function slideClient() {
	// 	mod.find('#clients .table').slick({
	// 		slidesToShow: 4,
	// 		slidesToScroll: 1,
	// 		autoplay: true,
	// 		autoplaySpeed: 2000,
	// 		infinite: true,
	// 		variableWidth: true,
	// 		responsive: [
	// 		{
	// 			breakpoint: 991,
	// 			settings: {
	// 				slidesToShow: 3,
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 1
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 450,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1
	// 			}
	// 		}
	// 		]
	// 	});
	// }
	
	function TheBestAntoree(){
		mod.find("#why .list").slick({
			slidesToShow:3,
			slidesToScroll:1,
			responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			]
		});
	}

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
		// partner();
		// clients();
		activePopup();
		addSuKienVaoButtons();
		TheBestAntoree();
		// slideClient();
		// slideMedia();
		popupBanner();
		popupAds();
		bestTeacher();
		maxHeigthLearn();
	});
})();