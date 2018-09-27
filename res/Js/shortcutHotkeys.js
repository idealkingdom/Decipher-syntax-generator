console.log("Up and running");

function doc_keyUp(e) {

    if (e.ctrlKey && e.altKey && e.keyCode == 49) {
        elementType('row');
    }
}
document.addEventListener('keyup', doc_keyUp, false);