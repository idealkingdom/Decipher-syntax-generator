function doc_keyUp(e) {

<<<<<<< HEAD
    if (e.ctrlKey && e.altKey && e.keyCode == 49) {
        elementType('row')
=======
    if (e.ctrlKey && e.keyCode == 49) {
        elementType('row');
        console.log("Loaded");
>>>>>>> 7a40e285d71ba539731becda1a9a123e469329af
    }
}
document.addEventListener('keyup', doc_keyUp, false);
