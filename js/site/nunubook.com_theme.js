"use strict";

// need init and change function seprite 分离
function inject_css(line_height) {
  let custom_css = document.createElement('style'), sheet;
  document.head.appendChild(custom_css);
  sheet = custom_css.sheet;
  let style = `.p {line-height: ${line_height};}`
  sheet.insertRule(style, 0);
}

function get_style_sheet() {
  if(!document.styleSheets) {
    console.log("no styleSheets");
    return;
  }
  else {
    console.log("styleSheets is " + document.styleSheets.length);
    return document.styleSheets[1];
  }
}

function set_theme() {
  chrome.storage.local
    .get(["theme", "font", "fontColor", "backgroundColor"])
    .then((result) => {
      console.log("theme is " + result.theme);
      console.log("fontColor is " + result.fontColor);
      console.log("backgroundColor is " + result.backgroundColor);
      let context = document.getElementsByClassName("read_page_con")[0];
      context.style.fontFamily = result['font_name'];
    });
}

function get_settings(key) {
  return chrome.storage.local.get(key);
}


function setSettings(changes, areaName) {

  let context = document.getElementsByClassName("read_page_con")[0];
  chrome.storage.local.get(null).then((result) => {
    console.log(result);
    console.log("根据设置修改页面");

    context.style.fontFamily = result["font_name"];
    context.style.fontSize = result["font_size"];
    context.style.color = result["fontColor"];
    context.style.lineHeight = result["line_height"];
    //$("body").attr("style", `background-color: ${result["backgroundColor"]}; margin: ${result["page_margin"]}`)
    $("#bg_div").css("background-image", `url("${chrome.runtime.getURL('img/wallpaper_2.jpg')})`)
    $("#bg_div").css("background-size", "cover")
    $("#bg_div").css("background-position", "center")
    $("#bg_div").css("background-repeat", "repeat")
    $("body").attr("style", `margin: ${result["page_margin"]}`)
    //document.body.style.backgroundColor = result["backgroundColor"];
    //document.getElementsByTagName("body")[0].style.margin = result["page_margin"];
  });
}




// init()
//setSettings();
$(document).ready(setSettings);
chrome.storage.onChanged.addListener(setSettings);
