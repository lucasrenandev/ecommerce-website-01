// STRICT MODE
"use strict"

/* ==== NORMAK SCROLL ==== */
const header = document.querySelector("header")
const navList = document.querySelector(".nav-list")
const menuIcon = document.querySelector("#menu-icon")
const scrollArrow = document.querySelector(".scroll-arrow")
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

const hiddenScrollArrow = () => {
    if(window.scrollY > 1000) {
        scrollArrow.style.display = "inline-flex"
    }
    else {
        scrollArrow.style.display = "none"
    }
}
window.addEventListener("scroll", hiddenScrollArrow)
hiddenScrollArrow()

/* ==== ANIMATION SCROLL ==== */
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

const target = document.querySelectorAll("[data-anime]")
const animationClass = "animate" 

function animationScroll() {
    const scrollTop = window.scrollY + ((window.innerHeight * 3) / 4)

    target.forEach(function(element) {
        if(scrollTop > element.offsetTop) {
            element.classList.add(animationClass)
        }
        else {
            element.classList.remove(animationClass)
        }
    }) 
}
animationScroll()

window.addEventListener("scroll", debounce(function() {
    animationScroll()
}, 200))

const sr = ScrollReveal({
    distance: "30px",
    duration: 2300,
    reset: true
})
sr.reveal(".home-content", {delay: 200, origin: "bottom"})