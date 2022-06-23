const popupMain = document.querySelector(".popup");
const modal = document.querySelector(".modal");
const btn = document.querySelector(".info__btn");
const subbtn = document.querySelector(".info__subbtn");
const closePopup = document.querySelector(".popup__close");
const closeModal = document.querySelector(".modal__close");
const tel = document.getElementById("tel");
const checkbox = document.querySelector(".popup__checkbox");
const form = document.querySelector(".popup__form");
const add = document.querySelector(".points__add");
const points = document.querySelector(".points");

window.onload = function () {
    btn.addEventListener("click", function () {
        popupMain.classList.add("popup__active");
    })
    subbtn.addEventListener("click", function () {
        popupMain.classList.add("popup__active");
    })
    form.addEventListener("submit", () => {
        popupMain.classList.remove("popup__active");
        modal.classList.add("modal__active");
    })
    closePopup.addEventListener("click", function () {
        popupMain.classList.remove("popup__active");
    })
    closeModal.addEventListener("click", function () {
        modal.classList.remove("modal__active");
    })
    document.addEventListener("click", actions)
    function actions(e) {
        const targetElement = e.target;
        if (!targetElement.closest(".popup__main") && !targetElement.closest(".info__btn") && !targetElement.closest(".info__subbtn")) {
            popupMain.classList.remove("popup__active");
        }
        if (!targetElement.closest(".modal__main")) {
            modal.classList.remove("modal__active")
        }
    }
}
points.addEventListener("click", function () {
    points.classList.toggle("points__active");
    add.classList.toggle("add__active");
})


let maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
}
let mask = new IMask(tel, maskOptions);

const Burger = document.querySelector(".header__burgerimg");
const menu = document.querySelector(".header__burgermenu");
const close = document.querySelector(".header__close");
const body = document.querySelector("body");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");



Burger.addEventListener("click", function () {
    body.classList.toggle("lock");
    menu.classList.toggle("active");
    Burger.classList.toggle("active");
    header.classList.toggle("header__active");
    nav.classList.toggle("nav__active");
});

close.addEventListener("click", function () {
    body.classList.toggle("lock");
    menu.classList.toggle("active");
    Burger.classList.toggle("active");
    header.classList.toggle("header__active");
    nav.classList.toggle("nav__active");
});

