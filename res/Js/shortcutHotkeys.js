function doc_keyUp(e) {

    if (e.ctrlKey && e.keyCode == 49) {
        elementType('row');
        console.log("Loaded");
    }
}
document.addEventListener('keyup', doc_keyUp, false);
