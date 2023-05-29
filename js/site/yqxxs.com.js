"use strict";


// print script is loading;
console.log("Loading print script");

function create_element() {
    // create container div 
    let container = document.createElement("table");
    let form = document.createElement("form");
    form.action = "/search/index.php";
    form.method = "post";
    form.name = "serach";
    container.appendChild(form);

    let search_select = document.createElement("select");
    search_select.name = "add[show]";
    search_select.id = "select";
    let option = document.createElement("option");
    option.value = "1";
    option.text = "按小说名";
    let option2 = document.createElement("option");
    option2.value = "2";
    option2.text = "按男主角";
    let option3 = document.createElement("option");
    option3.value = "3";
    option3.text = "按女主角";
    let option4 = document.createElement("option");
    option4.value = "4";
    option4.text = "按章节";
    search_select.appendChild(option);
    search_select.appendChild(option2);
    search_select.appendChild(option3);
    search_select.appendChild(option4);
    container.appendChild(search_select);
    //create input placer
    let input = document.createElement("input");
    input.name = "add[keyboard]";
    input.type = "text";
    input.class = "input_01";
    input.id = "add[keyboard]"
    container.appendChild(input);
    //create button
    let button = document.createElement("input");
    button.name = "searchnow";
    button.type = "image";
    button.value = "快速搜索";
    button.src = "https://img.yqxxs.com/images/s.gif";
    container.append(button);

    let body = document.querySelector("body");
    console.log(body);
    body.appendChild(container);
}

function clean_website() {
    let title = document.querySelector("title");
    console.log($("#title").value)
    console.log(title);
    let frames = document.querySelectorAll("iframe");
    console.log(`frames has :${frames.length}`);
    frames.forEach(frame => {
        frame.remove();
    });
    let tables = document.querySelectorAll("table");
    let divs = document.querySelectorAll("div");
    // remove div
    const re_ex = new RegExp("aswift_[0-9]_host");
    divs.forEach(div => {
        if(div.id.match(re_ex))
            div.remove();
    });
    //
    tables.forEach(table => {
        table.remove();
    });
}

function remove_iframe() {
    let frames = document.querySelectorAll("iframe");
    console.log(`frames has :${frames.length}`);
    frames.forEach(frame => {
        frame.remove();
    });
}

function main() {
    create_element();
    remove_iframe();
    
}


window.onload = main;

