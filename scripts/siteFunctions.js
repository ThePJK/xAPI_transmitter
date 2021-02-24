// **************************************************
// Seite öffnen und schließen
// **************************************************
window.onload = function(){sendStatement("launched", document.title);};

window.onbeforeunload = function(){sendStatement("terminated", document.title);};

// **************************************************
// Eventlistener für Buttons
// **************************************************

var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function(){sendStatement("pressed", "Button1");});

var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function(){sendStatement("pressed", "Button2");});

// **************************************************
// Eventlistener für lokales Video
// **************************************************

var videoLocal = document.getElementById("videoLocal");
videoLocal.addEventListener("play", function(){sendStatement("launched", "Local Video");});