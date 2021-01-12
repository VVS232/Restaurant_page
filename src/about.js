"use strict";
import $ from "jquery"


function createAbout(){
    document.getElementById("main").innerHTML="";
        let about=document.createElement("div");
    about.id="about";
    let imgWrap=document.createElement("div");
    imgWrap.className="swordImg"
    let img=document.createElement("img")
    img.className="swordImg";
    img.src="/img/Katanas.svg"
    imgWrap.appendChild(img);
    about.textContent="Компания была основана в 2015 году. С момента основания меню было разнообразным, в него входили блюда многих стран. В течении двух лет клиенты все чаще приходили к нам имено за блюдами японской кухни, в частности за суши и роллами. Решив остановится именно на этом направлении мы наняли лучших поваров и уже 4 года балуем Вас лучшими суши в Украине. У нас имеется бесплатная доставка при заказе от 300 гривен. Курьер приедет вовремя, иначе - всё за нас счет. Имеются детские комнаты, бесплатный вай фай, открытая кухня. Если хотите, чтоб всё было к Вашему приходу - делайте заказ по телефону и приходите к назначеному времени."
    about.prepend(imgWrap);

    document.getElementById("main").appendChild(about)
}

export default createAbout