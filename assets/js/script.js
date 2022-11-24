const header = document.querySelector("header")
const navlist = document.querySelector(".nav-list")
const menuIcon = document.querySelector("#menu-icon")
const scrollArrowContainer = document.querySelector(".scroll-arrow")
const scrollArrow = document.querySelector("#up-arrow")

document.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0)
})

menuIcon.addEventListener("click", (event) => {
    event.preventDefault()

    navlist.classList.toggle("active")
    menuIcon.classList.toggle("bx-x")
})

document.addEventListener("scroll", () => {
    navlist.classList.remove("active")
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
document.addEventListener("scroll", offSetTop)