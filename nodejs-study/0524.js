// Console : 디버깅을 위해 사용함. -> Console 클래스와 전역 객체로 사용할 수 있음
// Console Class
// 파일 쓰기와 같은 스트림에 사용될 수 있음
const fs = require("fs"); // fs : file system module, 파일 읽기, 쓰기 등을 할 수 있는 내장 모듈
const {Console} = require("console") // console 모듈 사용

const output = fs.createWriteStream('./stdout.log') // 파일 쓰기가 가능하도록 스트림 생성
const errorOutput = fs.createWriteStream('./stderr.log') // 파일 쓰기가 가능하도록 스트림 생성

const logger = new Console({stdout:output, stderr:errorOutput}); // 콘솔 객체 생성
const count = 5;
logger.log('count : %d', count)
logger.error('count: '+count)
// -> stdout.log와 stderr.log 파일에 count:5가 기록됨

// 전역 객체 console
// require 없이 바로 사용 가능

console.log('hello world')
console.log('hello %s', 'world')

const world = 'world'
console.log(`hello ${world}`)

console.error(new Error('Error Message'))

const arr = [
    {name: "hyerin", email: "123@gmail.com"},
    {name: "ubin", email:"ubin@gmail.com"}
]

console.table(arr);

const obj = {
    students: {
        grade1: {class1:{}, class:{}},
        grade2: {class1:{}, class:{}},
        teacher:["hyerin", "ubin"]
    }
}

console.dir(obj, {depth:1, colors:true})

console.time('time for for-loop')

for(let i = 0; i < 9999; i++) {}
console.timeEnd('time for for-loop')

/* 출력 : 
hello world
hello world
hello world
Error: Error Message
┌─────────┬──────────┬──────────────────┐
│ (index) │   name   │      email       │
├─────────┼──────────┼──────────────────┤
│    0    │ 'hyerin' │ '123@gmail.com'  │
│    1    │  'ubin'  │ 'ubin@gmail.com' │
└─────────┴──────────┴──────────────────┘
{ students: { grade1: [Object], grade2: [Object], teacher: [Array] } }
time for for-loop: 2.021ms
*/