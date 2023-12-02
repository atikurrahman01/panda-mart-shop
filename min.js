let mobileIcon = document.getElementById("mobileIcon");
let mobileMenu = document.getElementById("mainMenu");

mobileIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
})