$(document).keydown(function(e) {
    switch(e.which) {
        case 37: console.log("test");
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});