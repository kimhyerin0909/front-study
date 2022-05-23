// node.js에서 js 파일 실행하기
// node 파일명.js로 실행할 수 있다.
function myFunction() {
    console.log('Hello World');
}

myFunction();

// 모듈 (Module)
// : 분리된 각각의 js 파일, 각 파일은 특정한 목적을 가진 여러 개의 함수와 변수의 집합
// 재사용에 편이함

const defaultNum = 1;

function add(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

module.exports = { // 다른 js 파일에서 사용하기 위해 대입함.
    defaultNum,
    add,
    minus,
    mul,
    divide
}