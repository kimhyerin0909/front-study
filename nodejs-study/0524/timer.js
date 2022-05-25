// Timers : 전역 함수
// 웹 브라우저의 타이머 API와 매우 유사함
const timeout = setTimeout(() => {
    console.log('1초 후에 실행됨')
}, 1000)

const interval = setInterval(() => {
    console.log('1초마다 실행됨')
}, 1000)

const immediate = setImmediate(() => {
    console.log('setImmediate() 함수 호출 뒤에 오는 모든 코드를 먼저 실행 후 다음에 실행')
})

console.log('setImmediate보다 먼저 실행')

setTimeout(() => {
    clearInterval(interval) // setInterval() 함수를 종료
}, 4000)

/* 
setImmediate보다 먼저 실행
setImmediate() 함수 호출 뒤에 오는 모든 코드를 먼저 실행 후 다음에 실행
1초 후에 실행됨
1초마다 실행됨
1초마다 실행됨
1초마다 실행됨
*/