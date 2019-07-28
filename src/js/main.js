"use strict";

function openMenu() {
    console.log("opem");
    const hamburger = document.querySelector(".fas--js");
    const menu = document.querySelector(".nav__list--js");
    const hamburgerClose = document.querySelector(".header__hamburger--close-js")
    hamburgerClose.classList.toggle("header__hamburger--close")
    menu.classList.toggle("nav__list--open");
    hamburger.classList.toggle("fab--animate")
    hamburger.classList.toggle("fas")
    hamburger.classList.toggle("fa-bars")
    const header = document.querySelector(".header--js");
    header.style.opacity = .8;
}

function changer() {
    const el = document.querySelector(".tofill");
    if (el.innerHTML.length) {
        el.innerHTML = "";
    } else {
        el.innerHTML = "Pojawiam się i znikam";
    }
}

const hamburger = document.querySelector(".header__hamburger--js");
const hamburgerClose = document.querySelector(".header__hamburger--close-js")
const change = document.querySelector(".changer");
hamburger.addEventListener("click", openMenu);
hamburgerClose.addEventListener("click",openMenu);
window.addEventListener("scroll", scroll);
if (change) {
    change.addEventListener("click", changer);
}

