"use strict";

let port = chrome.runtime.connect({name: "chat"})
port.postMessage({web_page : "网页消息已打开"})
port.onMessage.addListener(function(msg){
    console.warn("消息已收到");
    console.log(msg);
});


