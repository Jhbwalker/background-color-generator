let css = document.querySelector("h3");
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');
let button = document.querySelector('button');

function getRandomColor() {
    let letter = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += letter[Math.floor(Math.random() *16)];
    }
    return color;
}
function setRandomColor() {
    color1.value = getRandomColor();
    console.log('color1: ' + color1.value);
    color2.value = getRandomColor();
    console.log('color2: ' +color2.value);
    setGradient();
}

function setGradient(){
    body.style.background =
        "linear-gradient(to right,"
        + color1.value
        + ","
        + color2.value
        + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
button.addEventListener('click', setRandomColor);