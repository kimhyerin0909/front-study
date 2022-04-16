const randomBtn = document.getElementById('btn');
const colorName = document.getElementById('color-name');
const $body = document.getElementById('hbody');

randomBtn.addEventListener("click", () => {
    let color = Math.floor(Math.random() * 999999);
    if(color < 100000) {
        color += "0";
    }
    $body.style.backgroundColor = "#" + color;
})