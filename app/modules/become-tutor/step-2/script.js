(function(){
	'use strict';
	var mod = $('#mod-step-2');

	function tooltipStep2() {
		var text1 = $('.text-1').html();
		var text2 = $('.text-2').html();
		var text3 = $('.text-3').html();

		mod.find('#tooltip-1').tooltipster({
			trigger: 'click',
			position: 'top',
			interactive: true,
			positionTracker: false,
			content: $(text1)
		});
		mod.find('#tooltip-2').tooltipster({
			trigger: 'click',
			position: 'top',
			interactive: true,
			positionTracker: false,
			content: $(text2)
		});

		mod.find('#tooltip-3').tooltipster({
			trigger: 'click',
			position: 'top',
			interactive: true,
			positionTracker: false,
			content: $(text3)
		});
	}

	function selectSubject() {
		mod.find('#select-english').select2();
	}

	function checkData(experienceTxt,selectEnglishArray,methodTextareaTxt,certificatesTxt,commentTxt) {
		if (experienceTxt == '' || selectEnglishArray == null || methodTextareaTxt == '' 
			|| methodTextareaTxt == '' || certificatesTxt == '' || commentTxt.length < 200)
			return 0;
		else return 1;
	}
	
	function checkDataStep2() {
		var success = 0;
		mod.find('form').submit(function(event) {
			var experienceTxt = mod.find('#experience-textarea').val();
			var selectEnglishArray = mod.find('#select-english').val();
			var methodTextareaTxt = mod.find('#method-textarea').val();
			var certificatesTxt = mod.find('#certificates-input').val();
			var commentTxt = mod.find('#comment').val();

			// var voiceUpload = mod.find('.upload').val();
			
			if (experienceTxt == '') mod.find('#experience-textarea').removeClass('default').addClass('error');
			else mod.find('#experience-textarea').addClass('default').removeClass('error');
			if (commentTxt.length < 200){
				mod.find('#comment').removeClass('default').addClass('error');
				mod.find('#alert-about').css('display', 'block');
			}
			else{
				mod.find('#comment').removeClass('error').addClass('default');
				mod.find('#alert-about').css('display', 'none');
			}
			if (selectEnglishArray == null)
			{
				$('.select2-container--default .select2-selection--multiple').removeClass('default').addClass('error');
				mod.find('#selectEnglishValidateTxt').css('display', 'block');
			} 
			else {
				$('.select2-container--default .select2-selection--multiple').addClass('error');
				mod.find('#selectEnglishValidateTxt').css('display', 'none');
			}

			if (methodTextareaTxt == '') mod.find('#method-textarea').removeClass('default').addClass('error');
			else mod.find('#method-textarea').removeClass('error').addClass('default');

			if (certificatesTxt == '') mod.find('.padd').removeClass('default').addClass('error');
			else mod.find('.padd').removeClass('error').addClass('default');
			event.preventDefault();
		});
	}
	
	$(document).ready(function() {
		tooltipStep2();
		selectSubject();
		// checkDataStep2();
	});
})();