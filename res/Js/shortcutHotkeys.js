$(function () {
var isCtrl=false
var isAlt =false
$(document).bind('keydown',function(e) {
	if (e.ctrlKey && e.which == 66) {
    	alert("Ctrl + B shortcut combination was pressed");
    }
});
$(document).bind('keyup',function(e) {
				isCtrl = false
				isAlt = false
});
});
