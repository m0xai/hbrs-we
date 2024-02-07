import { toggleNav } from "./sidebar.js";

window.toggleNav = toggleNav;

const demoSection = document.getElementById("demo-section")

const secondsEl = document.getElementById("seconds-since");
let secondsSince = 0;
setInterval(() => {
    secondsSince++;
    secondsEl.innerText = `You're viewing this page since ${secondsSince} seconds`;
}, 1000);

demoSection.appendChild(secondsEl)

let scrollBtn = document.getElementById("to-top-btn");

window.onscroll = function () { scrollFunction() };

let scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.topFunction = topFunction