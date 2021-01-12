"use strict";
import $ from "jquery"

function createMenu(){
    $("main").html("")
    const $menu=$("<div></div>");
    const $col1=$("<div></div>");
    const $col2=$("<div></div>");
    $menu.attr("id","menu");
    $col1.attr("id","col1");
    $col2.attr("id","col2");

    $menu.append($col1);
    $menu.append($col2);
    for (let i =0; i<5;i++){ //col1
        let $menuEl=$("<div></div>").addClass("menu-el");
        let $img=$("<img>")
        $img.attr({src:menu[i].imgLink, class:"menu-el-img"})
        let $imgText=$("<p></p>");
        $imgText.text(menu[i].foodName).addClass("img-text");

        let $ingreds=$("<p></p>");
        $ingreds.text(menu[i].ingreds).addClass("ingreds");
        $ingreds.slideUp();
        $menuEl.append($img, $imgText,$ingreds);
        $menuEl.appendTo($col1);
        addListeners($menuEl, $imgText,$ingreds);

    }
    for (let i =5; i<10;i++){ //col2
        let $menuEl=$("<div></div>").addClass("menu-el");
        let $img=$("<img>")
        $img.attr({src:menu[i].imgLink, class:"menu-el-img"})
        let $imgText=$("<p></p>");
        $imgText.text(menu[i].foodName).addClass("img-text");

        let $ingreds=$("<p></p>");
        $ingreds.text(menu[i].ingreds).addClass("ingreds");
        $ingreds.slideUp();
        $menuEl.append($img, $imgText,$ingreds);
        $menuEl.appendTo($col2);
        addListeners($menuEl, $imgText,$ingreds);
    }
  
$("main").append($menu);
}

function addListeners(menuel, name, ingred){

    menuel.mouseenter(()=>{
        menuel.find(".menu-el-img").toggleClass("menu-el-img-blur")
        name.slideToggle();
        ingred.slideToggle();
    })
    menuel.mouseleave(()=>{
        menuel.find(".menu-el-img").toggleClass("menu-el-img-blur")
        name.slideToggle();
        ingred.slideToggle();
    })
    menuel.on("touchend",()=>{
        menuel.find(".menu-el-img").toggleClass("menu-el-img-blur")
        name.slideToggle();
        ingred.slideToggle();
    })
}
class food{
    
    constructor(imgLink, foodName, ingreds){
        this.imgLink=imgLink;
        this.foodName=foodName;
        this.ingreds=ingreds.split(/[ ,]+/).join(', ');
    }
}

const menu=[]
menu.push(new food(`/img/1.png`, `Эби сяке роял`,"нори рис лосось чернила каракатицы креветки тигровые сыр филадельфия авокадо тобико оранжевая красная икра микрогрин"))
menu.push(new food("/img/2.jpeg", "Сяке гриль роял", "Рис японский нори сыр Филадельфия манго икра Тобико лосось гриль соус васаби лeпестки миндаля"));
menu.push(new food("/img/3.jpeg", "Филадельфия мини", "нори рис сыр Филадельфия огурец лосось"));
menu.push(new food("/img/4.jpeg", "Филадельфия", "рис лосось сыр Филадельфия авокадо огурец нори"));
menu.push(new food("/img/5.jpeg","Окинава","нори рис филадельфия лосось с/с креветки икра красная"));
menu.push(new food("/img/6.jpeg", "Ролл со снежным крабом и манго", "рис нори сыр филадельфия сурими снежный краб манго икра тобико"));
menu.push(new food("/img/7.jpeg","Эби сурими","Рис японский нори сыр Филадельфия икра тобико сурими"));
menu.push(new food("/img/8.jpeg", "Унаги авокадо роял", "Рис японский нори сыр Филадельфия авокадо икра тобико угорь"));
menu.push(new food("/img/9.jpeg", "Унаги фила роял", "Рис японский нори сыр филадельфия огурец угорь лосось японский майонез икра Тобико"));
menu.push(new food("/img/10.jpeg", "Спайси креветка роял", "Рис японский нори сыр Филадельфия огурец салат Айсберг креветка тигровая икра мойвы"))
export {createMenu}