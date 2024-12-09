import { getCookie, setCookie } from "../Modules/Cookies.js";

const popup = document.querySelector('#popup-wrap');
const closePopup = document.querySelector('#close-popup');

console.log(getCookie('popup_mostrato'));


if(!getCookie('popup_mostrato')){
    popup.classList.add('open');
}

closePopup.addEventListener('click', () =>{
    //rilascio cookie
    setCookie('popup_mostrato','1');
    //chiudo il popup
    popup.classList.remove('open');
})