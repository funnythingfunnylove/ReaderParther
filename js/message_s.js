"use strict";

/*
    this script working on every open website, using for get service worker message, alert to me.
*/

function liseten_message(port) {
    port.onMessage.addListener(function (msg) {
        console.log(msg);
        port.postMessage({server_worker : "服务器接收已打开"});
    });
    
}

chrome.runtime.onConnect.addListener(liseten_message);

