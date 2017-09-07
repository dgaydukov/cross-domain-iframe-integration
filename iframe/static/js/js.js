'use strict';


document.addEventListener("DOMContentLoaded", function () {
    console.log("iframe loaded");

    /*
    height change
     */
    (function () {
        var height = document.getElementById("main").scrollHeight;
        setInterval(()=>{
            if(height != document.getElementById("main").scrollHeight){
                height = document.getElementById("main").scrollHeight
                console.log("new height", height);
                parent.postMessage({height: height}, "*");
            }
        }, 100);
    })()
});




/*
height change imitation
 */
(function () {
    var links = document.querySelectorAll("#menu a");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (e) {
            var height = parseInt(e.target.getAttribute("height"));
            document.getElementById("main").style.height = height + "px";
        })
    }
})()