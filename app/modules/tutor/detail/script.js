(function(){
	'use strict';

	var mod = $('#mod-tutor-detail');

	var colorArray = ['#da4453','#e9573f','#f6bb42','#4a89dc','#3bafda','#8cc152','#37bc9b',
	'#967adc','#d770ad','#5c6bc0','#cddc39','#8d6e63','#78909c'];

	function returnColor(char,color) {
		switch(char) {
			case 'Á':
			case 'Â':
			case 'A':
			case 'A':
			case 'B': return color[0];
			case 'C':
			case 'D': return color[1];
			case 'E':
			case 'F': return color[2];
			case 'G':
			case 'H': return color[3];
			case 'I':
			case 'J': return color[4];
			case 'K':
			case 'L': return color[5];
			case 'M':
			case 'N': return color[6];
			case 'Ơ':
			case 'O':
			case 'P': return color[7];
			case 'Q':
			case 'R': return color[8];
			case 'S':
			case 'T': return color[9];
			case 'U':
			case 'V': return color[10];
			case 'W':
			case 'X': return color[11];
			default: return color[12];
		}
	}
	function AvatarFunc(name) {
		var nameArray = name.split(" ");
		var colorAvatar = returnColor(nameArray[0][0],colorArray);
		if (nameArray.length == 1) {
			return [nameArray[0][0],colorAvatar];
		}
		else{
			return [nameArray[0][0]+nameArray[nameArray.length-1][0],colorAvatar];
		}
	}

	function avatar(){
		mod.find('.evaluate-coment .comment').each(function(index, el) {
			if ($(this).find('img').length == 0) {
				var name = $(this).find('.semibold')[0].innerText;
				var avatarTL = AvatarFunc(name);
				$(this).find('.avatar-big-student a').addClass('avatar-default').css('background-color', avatarTL[1]).text(avatarTL[0]);
				$(this).find('.avatar-small-student a').addClass('avatar-default').css('background-color', avatarTL[1]).text(avatarTL[0]);
			}
		});
	}

	function popupYoutube() {
		mod.find('#watch-video').on('click', function(event) {
			event.preventDefault();
			helperJs.bzPopup({
				rel: '#popup-youtube',
				width: 640
			});
		});
	}

	function popupCerti() {
		mod.find('.pop-img-cer').each(function(index, el) {
			var idPopImageCer = "#" + $(this).attr('href');
			$(this).on('click', function(event) {
				event.preventDefault();
				helperJs.bzPopup({
					rel: idPopImageCer,
					width: 840,
				});
			});
		});
	}

	function scrollToSection() {
		mod.find('.title-detail-of-teacher ul.list-inline a').each(function() {
			$(this).on('click', function(event) {
				event.preventDefault();
				var link_href = $(this).attr('href');
				$('html, body').animate({
					scrollTop: $(link_href).offset().top
				}, 500);
			});
		})
	}
	function voicePlay() {
		
	}

	$(document).ready(function() {
		avatar();
		popupYoutube();
		popupCerti();
		scrollToSection();
	});
	$(window).load(function() {
		voicePlay();
	});
})();