(function(a){a.fn.limitCheckbox=function(d,c){var b=this.find("input[type=checkbox]");var d=d||b.size()-1,e=a.extend({callback:function(){}},c);b.click(function(){checked=b.filter(":checked").size();if(!a(this).is(":checked")){if(checked<d){b.not(this).removeAttr("disabled")}}else{if(checked==d){b.not(":checked").not(this).attr("disabled","disabled");if(c){c.callback()}}}});checked=b.filter(":checked").size();if(checked==d){b.not(":checked").attr("disabled","disabled")}}}(jQuery));