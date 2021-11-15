let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }

}

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 3000);
}
window.onload = fadeOut();

function showLogin() {
    var y = document.getElementById("signup");
    var x = document.getElementById("login");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
        x.style.display = "block";
    }
}

function showSignup() {
    var x = document.getElementById("login");
    var y = document.getElementById("signup");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";

    } else {
        x.style.display = "block";
    }
}