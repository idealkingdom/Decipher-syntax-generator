console.log("Again22");

function doc_keyUp(e) {
console.log(e.keyCode);
    if (e.ctrlKey && e.keyCode == 49) {
    	//CTRL + 1
        elementType('row');
        e.preventDefault();

    }

    else if (e.ctrlKey && e.keyCode == 82) {
    	//CTRL + ALT + R
        questionType('radio');
        e.preventDefault();
    }


}

function disableF5(e) {if ((e.which || e.keyCode) == 116) e.preventDefault(); if (e.ctrlKey && e.keyCode == 82) e.preventDefault();};

$(document).ready(function(){
$(document).on("keydown", function(e) {
   disableF5(e);
});
});
$(window).keydown(function(event) {
  if(event.ctrlKey && event.keyCode == 84) { 
    console.log("Hey! Ctrl+T event captured!");
    event.preventDefault();
    event.stopImmediatePropagation();
  }
  if(event.ctrlKey && event.keyCode == 83) { 
    console.log("Hey! Ctrl+S event captured!");
    event.preventDefault(); 
    event.stopImmediatePropagation();
  }
});






document.addEventListener('keyup', doc_keyUp, false);