(function(){
	'use strict';
	var mod = $('#mod-header');

	function events(){
		$('#register-popup').on('click',function(event){
			helperJs.bzPopup({rel:'#popupFormReg', width:350});
			event.preventDefault();
		});
		$('#login-popup').on('click',function(event){
			helperJs.bzPopup({rel:'#popupFormLogin', width:350});
			event.preventDefault();
		});
	}

	function canvasMenu(){
		var canvas = $(".canvas");
		var listMenumobile = $("#list-menu-mb");
		mod.find("#justify-icon").on("click",function(event){
			listMenumobile.animate({marginLeft:'-280px'},200);
			canvas.animate({left:'-280px'},200);
			if ($('#mod-tutor-detail').length) {
				$('.title-detail-of-teacher').animate({left:'-280px'},200);
			}
		});

		mod.find("#close-button").on("click",function(event){
			listMenumobile.animate({marginLeft:'0px'},200);
			canvas.animate({left:'0px'},200);
			if ($('#mod-tutor-detail').length) {
				$('.title-detail-of-teacher').animate({left:'0'},200);
			}
		});
	}

	$(document).ready(function(){
		events();
		canvasMenu();
	});
})();