"use strict";
import {createMenu} from "./menu"
import $ from "jquery";

function createMain(){
    $("#main").html("");
  const  $home=$("<div></div>");
    $home.attr("id","home");
    const $homeImg=$("<div></div>").attr("id","home-img");
    const $homeText=$("<div></div>").attr("id","home-text");
    $homeText.append($("<p></p>").attr("id","title").text("Самурай"));
    $homeText.append($("<button></button").attr({id:"toMenu", type:"button"}).text("Перейти к меню"))
    $home.append($homeImg.append($homeText))

    $("main").append($home);
  $("#toMenu").on("click", createMenu)
}
export default createMain;