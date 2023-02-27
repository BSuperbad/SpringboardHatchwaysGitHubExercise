function colorChangeRG() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = 0;
    return `rgb(${r}, ${g}, ${b})`
}

function colorChangeGB() {
    const r = 0;
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

function colorChangeRB() {
    const r = Math.floor(Math.random() * 256);
    const g = 0;
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}


const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const body = document.querySelector("body");

const h1NoBlue = setInterval(function () {
    h1.style.color = colorChangeRG();
}, 1000);

const pNoRed = setInterval(function () {
    p.style.color = colorChangeGB();
}, 2000);

const bodyNoGreen = setInterval(function () {
    body.style.backgroundColor = colorChangeRB();
}, 500);