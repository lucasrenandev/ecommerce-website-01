"use strict"

const header = document.querySelector("header")
const navList = document.querySelector(".nav-list")
const menuIcon = document.querySelector("#menu-icon")
const scrollArrow = document.querySelector(".scroll-arrow")
console.log(scrollArrow)
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
    window.scrollTo(0, 0)
})

const offSetVertical = () => {
    if(window.scrollY > 1000) {
        scrollArrow.style.display = "inline-flex"
    }
    else {
        scrollArrow.style.display = "none"
    }
}
window.addEventListener("scroll", offSetVertical)
offSetVertical()