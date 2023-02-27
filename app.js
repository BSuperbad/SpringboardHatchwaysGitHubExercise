function colorChangeRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const body = document.querySelector("body");

const intervalH1 = setInterval(function () {
    h1.style.color = colorChangeRGB();
}, 1000);

const intervalP = setInterval(function () {
    p.style.color = colorChangeRGB();
}, 2000);

const intervalBody = setInterval(function () {
    body.style.backgroundColor = colorChangeRGB();
}, 500);