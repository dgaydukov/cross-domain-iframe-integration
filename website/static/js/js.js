'use strict';

document.addEventListener("DOMContentLoaded", function () {
    console.log("website loaded");
    var iframe = document.getElementById("iframe");
    const iframeWindow = iframe.contentWindow;
    window.addEventListener("message", function(event){
        // check origin
        if(event.origin == "http://127.0.0.1:3322"){
            console.log("new message", event.data);
            if(event.data.height){
                iframe.height = parseInt(event.data.height);
            }
            if(event.data.top){
                window.scrollTo(0,0);
            }
            if(event.data.userId){
                createCookie("userId", event.data.userId);
            }
            if(event.data.ready){
                if(getQueryVariable("path")){
                    iframeWindow.postMessage({path: getQueryVariable("path")}, "*");
                }
                document.getElementById("login").addEventListener("click", function() {
                    iframeWindow.postMessage({token: token}, "*");
                });
                document.getElementById("logout").addEventListener("click", function() {
                    iframeWindow.postMessage({token: ""}, "*");
                });
            }
        }
    });
});