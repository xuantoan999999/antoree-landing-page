/***************************************************
Description: Các hàm tiện ích
****************************************************/
var helperJs = (function() {
    'use strict';
    return {
        clearFileInput: clearFileInput,                     // Xóa nội dung input["file"]
        isUndefinedNullEmpty: isUndefinedNullEmpty,         // Kiểm tra dữ liệu
        bzPopup: bzPopup,                                   // Xử lý tất cả popup
        getQueryString: getQueryString,                     // Lấy tham số trên URL
        formatMoney: formatMoney,                           // Định dạng đơn vị tiền tệ
        enterFullScreen: enterFullScreen,                   // Bật chế độ xem toàn màn hình
        exitFullScreen: exitFullScreen,                     // Tắt chế độ xem toàn màn hình
        clearLocalStorage: clearLocalStorage,               // Xóa hết storage Cookie
        removeLocalStorage: removeLocalStorage,             // Xóa storage Cookie được chọn
        getLocalStorage: getLocalStorage,                   // Lấy dữ liệu storage Cookie
        setLocalStorage: setLocalStorage,                   // Thêm dữ liệu storage Cookie
        debounce: debounce,                                 // Trì hoãn thực thi hàm
        throttle: throttle                                  //Trì hoãn thực thi hàm theo thời gian cố định
    };

    function enterFullScreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }

    function exitFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }

    function formatMoney(number, places, symbol, thousand, decimal) {
        number = number || 0;
        places = !isNaN(places = Math.abs(places)) ? places : 0;
        symbol = symbol !== undefined ? symbol : "";
        thousand = thousand || ".";
        decimal = decimal || ",";
        var negative = number < 0 ? "-" : "",
            i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
        return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
    }

    function getQueryString(url, name) {
        var a = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
        var regexS = '[\\?&]' + a + '=([^&#]*)';
        var regex = new RegExp(regexS);
        var results = regex.exec(url);
        if (results === null) return '';
        else return decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    function clearFileInput(obj) {
        obj.replaceWith(o.val('').clone(true));
    }

    function isUndefinedNullEmpty(data) {
        return (data === undefined || data === null || data === '');
    }

    function bzPopup(params) {
        if (typeof($.magnificPopup) === 'undefined') {
            alert('bzPopup: magnificPopup not found!');
            return false;
        } else {
            var o = $.extend({
                rel: '',
                type: 'inline',
                width: 700,
                removeDelay: 300,
                closeOnBg: true,
                enableEscapeKey: true,
                alignTop: false,
                showCloseBtn: true,
                closeBtnInside: true,
                effect: 'bzFromTop',
                overflowY: 'auto',
                fixedBgPos: 'auto',
                index: null,
                beforeOpen: function() {
                    this.st.mainClass = o.effect;
                },
                open: function() {},
                beforeClose: function() {},
                close: function() {},
                afterClose: function() {}
            }, params);
            var $element = $(o.rel);
            if ($element.length > 0) {
                $element.css({
                    maxWidth: o.width
                });
                $.magnificPopup.open({
                    removalDelay: o.removeDelay,
                    enableEscapeKey: o.enableEscapeKey,
                    alignTop: o.alignTop,
                    overflowY: o.overflowY,
                    fixedBgPos: o.fixedBgPos,
                    showCloseBtn: o.showCloseBtn,
                    closeBtnInside: o.closeBtnInside,
                    closeOnBgClick: o.closeOnBg,
                    index: o.index,
                    callbacks: {
                        beforeOpen: o.beforeOpen,
                        open: o.open,
                        beforeClose: o.beforeClose,
                        close: o.close,
                        afterClose: o.afterClose
                    },
                    items: {
                        src: o.rel,
                        type: 'inline'
                    }
                });
            } else {
                alert('bzPopup: rel not found!');
                return false;
            }
        }
    }

    function clearLocalStorage() {
        localStorage.clear();
    }

    function removeLocalStorage(name) {
        localStorage.removeItem(settingJs.appPrefix + '.' + name);
        localStorage.removeItem(settingJs.appPrefix + '.' + name + '_expt');
    }

    function setLocalStorage(name, value, expires) {
        var date = new Date(),
            expr = expires || 604800,
            schedule = Math.round((date.setSeconds(date.getSeconds() + expr)) / 1000);
        localStorage.setItem(settingJs.appPrefix + '.' + name, JSON.stringify(value));
        localStorage.setItem(settingJs.appPrefix + '.' + name + '_expt', schedule);
    }

    function getLocalStorage(name) {
        var date = new Date(),
            current = Math.round(+date / 1000),
            storedTime = localStorage.getItem(settingJs.appPrefix + '.' + name + '_expt') || 0,
            storedData = localStorage.getItem(settingJs.appPrefix + '.' + name);
        if (storedTime < current) {
            removeStorage(settingJs.appPrefix + '.' + name);
            return undefined;
        } else {
            return JSON.parse(storedData);
        }
    }

    function debounce(fn, ms) {
        var timer = null;
        return function() {
            var context = this,
                args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function() {
                fn.apply(context, args);
            }, ms);
        };
    }

    function throttle(fn, ms, scope) {
        ms || (ms = 250);
        var last,
        deferTimer;
        return function () {
            var context = scope || this;

            var now = +new Date,
            args = arguments;
            if (last && now < last + ms) {
                clearTimeout(deferTimer);
                deferTimer = setTimeout(function () {
                    last = now;
                    fn.apply(context, args);
                }, ms);
            } else {
                last = now;
                fn.apply(context, args);
            }
        };
    }
})();