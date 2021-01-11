"use strict";
import $ from "jquery"


function createContacts(){
    document.getElementById("main").innerHTML="";
        let contacts=document.createElement("div");
    contacts.id="contacts";
    
    contacts.appendChild(makeP("Как с нами связаться:"));
    contacts.appendChild(makeP("Телефон: +380000000000"));
    contacts.appendChild(makeP("Адрес: Харьков, ул. Пушкина, д. Колотушкина"));
    let map=document.createElement("div")
    map.innerHTML=`<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164152.76882136727!2d36.14574285565732!3d49.994727744398496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a09f63ab0f8b%3A0x2d4c18681aa4be0a!2z0KXQsNGA0YzQutC-0LIsINCl0LDRgNGM0LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sua!4v1610226479913!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
    contacts.appendChild(map)
document.getElementById("main").appendChild(contacts)
}


function makeP(Text){
 let P=document.createElement("p")
 P.className="contact";
 P.innerText=Text;
 return P
}

export default createContacts