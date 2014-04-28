/**
 * limitCheckbox v0.1 http://kinduff.github.io/limitCheckbox
 * author: @kinduff
 */
(function ($) {
    $.fn.limitCheckbox = function (num, options) {
        var num = num || $(this).children('input[type=checkbox]').size() - 1,
            settings = $.extend({}, options),
            selector = this.children('input[type=checkbox]');
        selector.click(function () {
            if (!$(this).is(':checked')) {
                if (selector.filter(':checked').size() < num) {
                    selector.not(this).removeAttr("disabled");
                }
            } else {
                if (selector.filter(':checked').size() == num) {
                    selector.not(':checked').not(this).attr("disabled", "disabled");
                }
            }
        });
    };
}(jQuery));
