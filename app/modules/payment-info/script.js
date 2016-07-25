(function(){
	'use strict';
	var mod = $('#mod-payment-info');

	function setHidden() {
		mod.find(".bank").removeClass('active');
		mod.find(".check").val("no");
		mod.find("#group-1 input").removeAttr('required');
	}

	function showBank(link) {
		var check = link+" .check";
		mod.find(link).addClass('active');
		if (mod.find(link).hasClass("showbank")) {
			mod.find(check).val("yes");
		}
	}

	function showCommonBank() {
		showBank("#text-provide");
		showBank("#paypal-bank");
		showBank("#skrill-bank");
	}

	function bankOut() {
		mod.find('#select-group').change(function() {
			var link = mod.find('#select-group option:selected').attr('href');
			var value = mod.find('#select-group option:selected').attr('value');
			if (link != "") { mod.find('#select-group').css('color', '#384047');}
			setHidden();
			mod.find("#group").val(link[7]);
			mod.find("#country").val(value);
			if (link == "#group-1") {
				showBank(link);
				mod.find("#vn-check").val("yes");
				mod.find("#group-1 input").attr('required', 'true');
				mod.find('#group-1').addClass('showbank');
			}
			if (link == "#group-2") {
				showCommonBank();
				showBank("#philippine-bank");
			}
			if (link == "#group-3") {
				showCommonBank();
				showBank("#bank-account");
				showBank("#payoneer-bank");
				showBank("#other-bank");
			}
			if (link == "#group-4") {
				showCommonBank();
				showBank("#payoneer-bank");
				showBank("#other-bank");
			}
		});
	}

	function bankRollDown() {
		mod.find('.bank').each(function(index, el) {
			var modBank = $(this);
			modBank.find('.checkbox-bank').on('click', function(event) {
				event.preventDefault();
				if (!modBank.hasClass('showbank')){
					modBank.addClass('showbank');
					modBank.find('.check').val("yes");
					modBank.find('input[type="checkbox"]')[0].checked = true;
					modBank.find('input').attr('required', 'true');
					modBank.find('.not-required').removeAttr('required');
					modBank.find('input[type="hidden"]').removeAttr('required');
					modBank.find('input[type="checkbox"]').removeAttr('required');
					modBank.find('textarea').attr('required','true');
				}
				else {
					modBank.removeClass('showbank');
					modBank.find('.check').val("no");
					modBank.find('input[type="checkbox"]')[0].checked = false;
					modBank.find('input').removeAttr('required');
					modBank.find('textarea').removeAttr('required');
				}
			});
		});
	}

	$(document).ready(function() {
		bankRollDown();
		bankOut();
	});
})();