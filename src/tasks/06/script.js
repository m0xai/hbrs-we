const eingabe = document.getElementById("eingabe");

const preList = [];
const postList = [];

eingabe.addEventListener("keyup", () => {
    console.log(Date.now(), eingabe.value);
    let isEven = true;
    for (let i = 0; i < preList.length; i++) {
        const preCount = eingabe.value.split(preList[i]).length - 1;
        const postCount = eingabe.value.split(postList[i]).length - 1;
        if (preCount !== postCount) {
            isEven = false;
        }
    }
    if (!isEven) {
        eingabe.style.cssText = "border: 3px solid red";
    } else {
        eingabe.style.cssText = "";
    }
});

function submitSymbols() {
    const preListInput = document.getElementById("pre-list-input");
    const postListInput = document.getElementById("post-list-input");

    if (!preListInput.value || !postListInput.value) {
        window.alert("Please provide one pre and one post symbols");
        return;
    }

    preList.push(preListInput.value);
    postList.push(postListInput.value);

    preListInput.value = "";
    postListInput.value = "";

    const symbolListEl = document.getElementById("symbol-list");
    symbolListEl.innerHTML = "";
    for (let i = 0; i < preList.length; i++) {
        symbolListEl.innerHTML += `<li>${preList[i]} - ${postList[i]}</li>`;
    }
}

function clearTextArea() {
    eingabe.value = "";
}
