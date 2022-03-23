let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl =document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let sum = 0;
let cards = []
const player = {
    name:"홍길동",
    money:145
}
document.getElementById('player').textContent = player.name +" : $" +player.money; 
function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    isAlive = true;
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardEl.textContent = 'Cards : ';
    for(let i = 0; i<cards.length;i++) {
        cardEl.textContent += " "+cards[i];
    }
    sumEl.textContent = "Sum : "+sum;
    if(sum < 21) {
        message = "카드를 더 뽑으실 건가요?"
    } else if(sum === 21) {
        message = "블랙잭! 승리";
        hasBlackJack = true;
    } else if(sum > 21) {
        message = "패배";
        isAlive = false;
    }
    messageEl.textContent = message;
    
}

function newCard() {
    if(isAlive === false || hasBlackJack === true) {
        return 0;
    }
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
}

function getRandomCard() {
    let num = (Math.random() * 13) + 1;
    if(num === 1) {
        return 11;
    } else if(num > 10) {
        return 10;
    }
    return Math.floor(num);
}