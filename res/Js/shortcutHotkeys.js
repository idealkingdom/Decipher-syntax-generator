console.log("Again22");

function doc_keyUp(e) {
console.log(e.keyCode);
    if (e.ctrlKey && e.keyCode == 49) {
    	//CTRL + 1
        elementType('row');

    }

    else if (e.ctrlKey && e.keyCode == 82) {
    	//CTRL + ALT + R
        questionType('radio');
        event.preventDefault();
    }

}

function disableF5(e) {if ((e.which || e.keyCode) == 116) e.preventDefault(); if (e.ctrlKey && e.keyCode == 82) e.preventDefault();};


$(document).ready(function(){
$(document).on("keydown", disableF5);
});

document.addEventListener('keyup', doc_keyUp, false);