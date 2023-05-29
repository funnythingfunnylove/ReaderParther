"use strict"

function inject_menu() {
    let insert_position = document.getElementsByClassName("wrapper")[0];


    let float_menu = document.createElement('div');
    float_menu.id = 'float_menu';

    let menu_text = document.createElement('a');
    menu_text.innerText = "菜单";
    menu_text.id = 'menu_text';
    menu_text.href = "#";
    float_menu.appendChild(menu_text);

    let font_text = document.createElement('a');
    font_text.innerText = "字体修改";
    font_text.id = 'font_text';
    font_text.href = "#";
    font_text.onclick = null;
    float_menu.appendChild(font_text);
    
    // create menu list items
    let menu_ = document.createElement("div");
    menu_.setAttribute("id", "menu_");
    let menu_list = [
        "首页",
        "个人设置",
        "主题切换"
    ]
    let items = document.createElement('ul');
    for (const item of menu_list) {
        const tmp = document.createElement('li');
        tmp.innerHTML = "<a href='#'>" + item + "</a>";
        items.appendChild(tmp);
    }
    menu_.appendChild(items);

    let font_Change = document.createElement('a');
    font_Change.innerText = "字体修改";
    

    insert_position.appendChild(float_menu);
    insert_position.appendChild(menu_);
}




function remove_content(){
    const next_url = document.getElementById("booksnext_btn").getAttribute("href");
    document.getElementById("topbox").remove();
    document.getElementById("bottomBar").remove();
    document.getElementById("sub_nav").remove();

    let nav = document.createElement('div');
    nav.id = 'bottombar';
    nav.style.alignContent = "center";

    let pre_botton = document.createElement('a');
    pre_botton.id = 'pre_botton';
    pre_botton.href = "#";
    pre_botton.innerHTML = '上一章';

    let next_botton = document.createElement('a');
    next_botton.id = 'next_botton';
    next_botton.href = "#";
    next_botton.innerHTML = '下一章';
    next_botton.setAttribute("href", next_url);
    nav.appendChild(pre_botton);
    nav.appendChild(next_botton);
    
    let insert_position = document.getElementsByClassName("wrapper")[0];
    insert_position.appendChild(nav);
    // create custom nav style
    
}

function format_document( ){
    remove_content();
    inject_menu();
};

document.addEventListener("DOMContentLoaded", format_document());