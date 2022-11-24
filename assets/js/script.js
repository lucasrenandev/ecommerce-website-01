const header = document.querySelector("header")
const navlist = document.querySelector(".nav-list")
const menuIcon = document.querySelector("#menu-icon")

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0)
})

menuIcon.addEventListener("click", (event) => {
    event.preventDefault()

    navlist.classList.toggle("active")
    menuIcon.classList.toggle("bx-x")
})

window.addEventListener("scroll", () => {
    navlist.classList.remove("active")
    menuIcon.classList.remove("bx-x")
})