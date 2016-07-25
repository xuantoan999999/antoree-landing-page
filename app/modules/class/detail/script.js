(function(){
	'use strict';
	var mod = $('#mod-class-detail');

	function popup() {
		mod.find('.popup-show').each(function(index, el) {
			$(this).on('click', function(event) {
				event.preventDefault();
				helperJs.bzPopup({
					rel: '#popup-list',
					width: 550,
					showCloseBtn: false
				});
			});
		});
	}

	function addRow() {
		mod.find('#add-class-btn').on('click', function(event) {
			var tables = mod.find('.content-table');
			var countNumber = tables.length;
			var countTrial = tables.find('.number:contains("Trial")').length;
			var number = countNumber - countTrial;
			var row = mod.find('#add-row tbody')[0].innerHTML;
			event.preventDefault();
			mod.find('tr.content-table').last().after(row);
			mod.find('.number-add').last().text(number).removeClass('number-add');
			popup();
		});
	}

	$(document).ready(function() {
		popup();
		addRow();
	});

})();