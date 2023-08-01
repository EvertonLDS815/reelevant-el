const buttonMenu = document.querySelector(".bx-menu");
const nav = document.querySelector("header nav");

function openMenu() {
    if(nav.style.width === "var(--width-menu)") {
        closeMenu()
    } else {
        nav.style.width = "var(--width-menu)"
    }
}

function closeMenu() {
    nav.style.width = "var(--width-menu-initial)";
}
buttonMenu.addEventListener("click", openMenu)