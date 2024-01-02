let menu = document.querySelector(".fas");
let nav = document.querySelector(".nav-bar");
let getDate = document.querySelector(".check-date");

// Event listener for mobile menu
menu.addEventListener("click", () => {

switchMenuIcon(menu);
mobileMenuToggle(nav);

})

function switchMenuIcon(icon) {
    icon.classList.toggle("fa-times");
}

function mobileMenuToggle(nav) {
    nav.classList.toggle("toggle-nav");
}

function getFooterDate (footer) {
    let today = new Date();
    footer.textContent = today.getFullYear();
}

getFooterDate(getDate);