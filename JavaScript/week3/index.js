const outBtn = document.getElementById('out');
const inBtn = document.getElementById('in');
const steamBtn = document.getElementById('steam');
const list = document.getElementById('list');
const money = document.getElementById('money');
const showSum = document.getElementById('sum');
let outFlag = false;
let inFlag = false;
let steamFlag = false;
let sum = 0;

function addListItem(type) {
    if(type === 'out') {
        if(outFlag === true) {
            return 0;
        }
        list.innerHTML += "<li>차량 외부 손세차</li>";
        money.innerHTML = "30000원";
        outFlag = true;
        sum += 30000;
    } else if(type === 'in') {
        if(inFlag === true) {
            return 0;
        }
        list.innerHTML += "<li>차량 내부 손세차</li>";
        money.innerHTML = "40000원";
        inFlag = true;
        sum += 40000;
    } else if(type === 'steam') {
        if(steamFlag === true) {
            return 0;
        }
        list.innerHTML += "<li>스팀 세차</li>";
        money.innerHTML = "20000원";
        steamFlag = true;
        sum += 20000;
    }
    showSum.innerHTML = sum;
}

function reset() {
    list.innerHTML = '';
    money.innerHTML = ''
    outFlag = false;
    inFlag = false;
    steamFlag = false;
    sum = 0;
    showSum.innerHTML = sum;
}