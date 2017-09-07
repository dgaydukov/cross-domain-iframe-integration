'use strict';

document.addEventListener("DOMContentLoaded", function () {
    console.log("website loaded");
    var iframe = document.getElementById("iframe");
    const iframeWindow = iframe.contentWindow;
    window.addEventListener("message", function(event){
        // check origin
        if(event.origin == "http://127.0.0.1:3322"){
            console.log("new message", event.data);
            //adjust height
            if(event.data.height){
                iframe.height = parseInt(event.data.height);
            }
            //scroll to top
            if(event.data.top){
                window.scrollTo(0,0);
            }
            //ser userId
            if(event.data.userId){
                createCookie("userId", event.data.userId);
            }
            if(event.data.ready){
                if(getQueryVariable("path")){
                    iframeWindow.postMessage({path: getQueryVariable("path")}, "*");
                }
                document.getElementById("login").addEventListener("click", function() {
                    iframeWindow.postMessage({login: true}, "*");
                });
                document.getElementById("logout").addEventListener("click", function() {
                    iframeWindow.postMessage({logout: true}, "*");
                });
            }
        }
    });
});



function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return false;
}