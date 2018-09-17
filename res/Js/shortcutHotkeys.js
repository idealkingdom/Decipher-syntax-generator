$(function () {
var isCtrl=false
var isAlt =false
$(document).bind('keydown',function(e) {
				isCtrl = true
				isAlt = true
				if(isCtrl == true && isAlt == true){
					if(e.keyCode == 49){
						$('#clean').click()
					}
				}
});
$(document).bind('keyup',function(e) {
				isCtrl = false
				isAlt = false
});
});
