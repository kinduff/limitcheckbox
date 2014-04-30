/**
 * limitCheckbox v0.1 http://kinduff.github.io/limitCheckbox
 * author: @kinduff
 */
(function ($) {
    $.fn.limitCheckbox = function (num, options) {
        var selector = this.children('input[type=checkbox]');
        var num = num || selector.size() - 1,
            settings = $.extend({
              callback: function() {}
            }, options);
        selector.click(function () {
            checked = selector.filter(':checked').size()
            if (!$(this).is(':checked')) {
                if (checked < num) {
                    selector.not(this).removeAttr("disabled");
                }
            } else {
                if (checked == num) {
                    selector.not(':checked').not(this).attr("disabled", "disabled");
                    if (options) options.callback();
                }
            }
        });
    };
}(jQuery));
