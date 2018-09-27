console.log("Again");

function doc_keyUp(e) {

    if (e.ctrlKey && e.shiftKey && e.keyCode == 49) {
    	//CTRL + SHIFT + 1
        elementType('row');
    }

    else if (e.ctrlKey && e.keyCode == 82) {
    	//CTRL + SHIFT + R
        questionType('radio');
        event.preventDefault();
    }




}
document.addEventListener('keyup', doc_keyUp, false);
