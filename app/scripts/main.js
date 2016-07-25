/***************************************************
Description: Script dùng chung cho tất cả các trang
****************************************************/
var mainJs = (function(){
    return {
    	closePopup: closePopup
    };

    function closePopup(event) {
    	$.magnificPopup.close();
    	event.preventDefault();
    }
})();
