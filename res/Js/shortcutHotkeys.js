console.log("Again22");

function doc_keyUp(e) {

    if (e.ctrlKey && e.keyCode == 49) {
    	//CTRL + ALT + 1
        elementType('row');
    }

    else if (e.ctrlKey && e.keyCode == 82) {
    	//CTRL + ALT + R
        questionType('radio');
        event.preventDefault();
    }

}
document.addEventListener('keyup', doc_keyUp, false);