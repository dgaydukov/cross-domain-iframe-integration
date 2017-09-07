'use strict';


document.addEventListener("DOMContentLoaded", function () {
    console.log("iframe loaded");
    parent.postMessage({ready: true}, "*");
    window.addEventListener("message", event=>{
        if(event.origin == "http://127.0.0.1:3321"){
            console.log("new message", event.data);
            if(event.data.login){
                console.log("login user");
            }
            if(event.data.logout){
                console.log("logout user");
            }
            if(event.data.path){
                console.log("change iframe path");
            }
        }
    });

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
