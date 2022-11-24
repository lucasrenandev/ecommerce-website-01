"use strict"

const header = document.querySelector("header")
const navList = document.querySelector(".nav-list")
const menuIcon = document.querySelector("#menu-icon")
const scrollArrowContainer = document.querySelector(".scroll-arrow")
const scrollArrow = document.querySelector("#up-arrow")
const preventReload = Array.from(document.getElementsByClassName("prevent-reload"))

preventReload.map(prevent => {
    prevent.addEventListener("click", (event) => {
        event.preventDefault()
    })
})

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0)
})

menuIcon.addEventListener("click", (event) => {
    event.preventDefault()

    navList.classList.toggle("active")
    menuIcon.classList.toggle("bx-x")
})

window.addEventListener("scroll", () => {
    navList.classList.remove("active")
    menuIcon.classList.remove("bx-x")
})

scrollArrow.addEventListener("click", () => {
    offSet()
})

const offSet = () => {
    window.scrollTo(0, 0)
}

const offSetTop = () => {
    if(window.scrollY > 1000) {
        scrollArrowContainer.style.display = "flex"
    }
    else {
        scrollArrowContainer.style.display = "none"
    }
}
window.addEventListener("scroll", offSetTop)