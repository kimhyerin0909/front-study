let today = new Date();
let year = today.getFullYear();
let month = prompt('태어난 달은?') - 1;
let day = prompt('태어난 날짜는?');

let birthDay = new Date(year, month, day);
let diffDate = Math.ceil( (birthDay.getTime() - today.getTime()) / (24 * 60 * 60 * 1000));

if(diffDate === 0) {
    document.write(`생일 축하합니당!`);
} else if(diffDate > 0) {
    document.write(`생일까지 ${diffDate}일 남았습니다.`);
} else if(diffDate < 0) {
    document.write(`생일에서 ${Math.abs(diffDate)}일 지났습니다.`);
}