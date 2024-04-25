const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
num = document.querySelector("#num");

let a = 1;

plus.addEventListener("click", () => {
    a++;
    num.innerText = a;
})

minus.addEventListener("click", () => {
    if (a > 1) {
        a--;
        num.innerText = a;
    }
})

var img = document.getElementById("bigbox");

function changeImg1() {
    img.src = "/Image/Colgate/1.png";
}

function changeImg2() {
    img.src = "/Image/Colgate/2.png";
}

function changeImg3() {
    img.src = "/Image/Colgate/3.png";
}

function changeImg4() {
    img.src = "/Image/Colgate/4.png";
}

function changeImg5() {
    img.src = "/Image/Colgate/5.png";
}

function changeImg6() {
    img.src = "/Image/Colgate/6.webp";
}