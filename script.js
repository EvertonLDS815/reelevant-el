const buttonMenu = document.querySelector(".bx-menu");
const nav = document.querySelector("header nav");
const overlay = document.querySelector("#overlay");

function openMenu() {
    if(nav.style.width === "var(--width-menu)") {
        closeMenu();
    } else {
        nav.style.width = "var(--width-menu)";
        overlay.style.display = "block";
    }
}
buttonMenu.addEventListener("click", openMenu);

function closeMenu() {
    nav.style.width = "var(--width-menu-initial)";
    overlay.style.display = "none";
}
overlay.addEventListener("click", closeMenu)