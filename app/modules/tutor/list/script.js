var tutorJs = (function(){
	'use strict';

	var mod = $('#mod-tutor-list');

	function startAudio(audio,button,animation) {
		animation.css('animation-play-state', 'running');
		button.removeClass('play').addClass('pause');
		audio.trigger('play');
	}
	function pauseAudio(audio,button,animation) {
		animation.css('animation-play-state', 'paused');
		button.removeClass('pause').addClass('play');
		audio.trigger('pause');
	}
	function voicePlay(){
		mod.find('.voice-teach').each(function(index, el) {

			var audio = $(this).find('audio');
			var length = audio[0].duration;
			var audioButton = $(this).find('.audio');
			var audioAnimation = $(this).find('.wedge');
			audioAnimation.css('animation-duration', length+'s');
			if (length > 0) {
				$(this).on('click', function(event) {
					event.preventDefault();
					if (audioButton.hasClass('play')) {
						$('.wedge').css('animation-play-state', 'paused');
						$('audio').trigger('pause');
						$('.audio').removeClass('pause').addClass('play');

						startAudio(audio,audioButton,audioAnimation);
						setInterval(function() {
							if (audio[0].currentTime == length) {
								pauseAudio(audio,audioButton,audioAnimation);
							}
						},1);
					}
					else{
						pauseAudio(audio,audioButton,audioAnimation);
					}
				});
			}
		});
	}

	$(window).load(function() {
		voicePlay();
	});

	return {
		voicePlay:voicePlay
    };
}());