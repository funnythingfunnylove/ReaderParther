"use strict";

function get_theme_settings() {
  chrome.storage.local.get(null).then((result) => {
    console.log(result);
    console.log("根据设置修改页面");
    console.log("current font is " + result["font_name"]);
    console.log("current fontColor is " + result["fontColor"]);
    console.log("current backgroundColor is " + result["backgroundColor"]);
    console.log("current body margin is " + result["page_margin"]);
    return result;
  });
}