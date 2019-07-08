"use strict";

function openMenu() {
    console.log("opem");
    const menu = document.querySelector(".nav__list--js");
    menu.classList.toggle("nav__list--open");
    const header = document.querySelector(".header--js");
    header.style.opacity = 1;
}

function scroll() {
    const header = document.querySelector(".header--js");
    const menu = document.querySelector(".nav__list--js");
    const arrow = document.querySelector(".arrow-up--js")
    window.onscroll = () => {
        if (menu.classList.contains("nav__list--open")) {
            menu.classList.remove("nav__list--open")
        }
    };
    if (scrollY > 0) {
        header.style.opacity = 0.5;
        arrow.style.display = 'block'
    } else {
        header.style.opacity = 1;
        arrow.style.display = 'none'
    }
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

