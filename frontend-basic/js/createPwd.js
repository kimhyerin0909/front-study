// 8글자 ~ 16글자
// 대소문자, 숫자, 특수문자 포함
// 버튼을 누르면 비밀번호 생성
// 누를 때마다 4가지 비밀번호 추천
// 추천된 비밀번호를 클릭하면 클립보드에 복사되도록
// document.execCommand('copy');

let set = {
    "number" : "0123456789",
    "symbol" : "!@#$%^&*()-_=+",
    "captial" : ["A","B","C","D","E","F","G","H","I",
                "J","K","L","M","N","O","P","Q","R","S","T",
                "U","V","W","X","Y","Z"],
    "small" : "abcdefghijklmnopqrstuvwxyz",
}
let password = [];
let newPwd = 16;

const createPwd = () => {
    console.log(set.captial);
}