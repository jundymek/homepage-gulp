"use strict";

function openMenu() {
    console.log("opem");
    const menu = document.querySelector(".nav__list--js");
    menu.classList.toggle("nav__list--open");
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
const change = document.querySelector(".changer");
hamburger.addEventListener("click", openMenu);
window.addEventListener("scroll", scroll);
if (change) {
    change.addEventListener("click", changer);
}

