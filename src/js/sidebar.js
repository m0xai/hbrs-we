export function toggleNav() {
    const sidebar = document.getElementById("mySidebar");
    sidebar.style.left = (sidebar.style.left === "0px") ? "-250px" : "0";
}

const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}