import { toggleNav } from "./sidebar.js";

window.toggleNav = toggleNav;

const stats = document.getElementById("stats")

const secondsEl = document.createElement("p");
let secondsSince = 0;
setInterval(() => {
    secondsSince++;
    secondsEl.innerText = `You're viewing this page since ${secondsSince} seconds`;
}, 1000);

stats.appendChild(secondsEl)
