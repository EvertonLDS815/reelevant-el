const buttonMenu = document.querySelector(".bx-menu");
const nav = document.querySelector("header nav");
const overlay = document.querySelector("#overlay");
const myDate = document.getElementById("date");

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
overlay.addEventListener("click", closeMenu);

const newDate = new Date();
const year = newDate.getFullYear();
myDate.innerHTML = `© ${year} - Todos os Direitos Reservados`;
