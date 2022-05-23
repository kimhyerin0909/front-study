// 정규 표현식 (Regular Expression)

let regexp = /World/;

let str = "Hello World! world!";
const re = /World/i;
console.log(re.test(str));
console.log(str.search(re));