var log = document.getElementById("log");

log.addEventListener("click", () => {
    var up = document.getElementById("up");
    var dropdown = document.getElementById("ddown");
    var color = document.querySelector(".do");

    dropdown.classList.toggle('show');
    color.classList.toggle("color");
    up.classList.toggle("transform");
})