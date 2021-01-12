import $ from "jquery"
import {createMenu} from "./menu"
import createAbout from "./about"
import createContacts from "./contacts"
import createMain from "./mainPage"



const $main=$("<main></main>");
$main.attr("id","main")
createHeader("Главная","Меню","О нас","Контакты");
$main.appendTo($("#content"))




function createHeader(...nav){
    const $header=$("<header></header>");
    $header.html(`<a  class="icon">
    <i class="fa fa-bars"></i>`);
    const $nav=$("<nav></nav>");
    $header.append($("<img>").attr({src:"../img/samurai.png",id:"samurai-img",alt:"samurai logo image"}));
    $header.append($("<h1></h1>").text("Самурай"));

    for (let i =0; i<arguments.length;i++){
        $nav.append($("<p></p>").attr({Class:"nav-el",id:`nav${i+1}`}).text(arguments[i]))
    }
$header.append($nav);


    



$("#content").append($header)
$("#nav1").on("click", createMain)
$("#nav2").on("click", createMenu)
$("#nav3").on("click", createAbout)
$("#nav4").on("click", createContacts)
$(".icon").on("click",()=>{
    if ($nav.css("display") === "block") {
  $nav.css("display","none")
} else {
    $nav.css("display","block")
}
})
$("#samurai-img").on("click",createMain)
}
createMain();
