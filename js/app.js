'use strict';


// this scripts need jquery.

function create_bg_div() {
    let bg_div = $("<div></div>");

    bg_div.attr("id", "bg_div");
    //bg_div.css("z-index", "-1");
    $("body").append(bg_div);
}

function create_menu() {
    
    const next_url = $("#booksnext_btn").attr("href");

    let menu = document.createElement('a');
    menu.innerText = "菜单";
    menu.id = 'menu';
    menu.href = "#";

    let pre_botton = document.createElement('a');
    pre_botton.id = 'pre_botton';
    pre_botton.href = "#";
    pre_botton.innerHTML = '上一章';

    let next_botton = document.createElement('a');
    next_botton.id = 'next_botton';
    next_botton.href = "#";
    next_botton.innerHTML = '下一章';
    next_botton.setAttribute("href", next_url);

    let app = document.createElement('div');
    app.id = 'app';
    app.style.alignContent = "center";
     
    // append create element
    app.appendChild(pre_botton);
    app.appendChild(next_botton);
    app.appendChild(menu)
    
    // insert menu to web page.
    let insert_position = $("div.wrapper");
    insert_position.append(app);
}

function anime_menu() {
    $("#menu").animejs({translateX: 550, duration: 3000}); 
}

function loadingApp() {
    create_bg_div();
    create_menu();
    anime_menu();
}



$(document).ready(function() {
    loadingApp();
});
