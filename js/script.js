const header = document.querySelector("header");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY >0);
});

themeToggle.addEventListener("click", () => {
    body.classList.toggle("darkmode");
    const icon = themeToggle.querySelector("i");
    if (body.classList.contains("darkmode")) {
        icon.classList.remove("bx-moon");
        icon.classList.add("bx-sun");
    } else {
        icon.classList.remove("bx-sun");
        icon.classList.add("bx-moon");
    }
})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const sr = ScrollReveal ({
    distance: '25px',
    duration: 250,
    reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',
    {delay:200, origin:'bottom'})