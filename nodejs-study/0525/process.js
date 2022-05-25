// Process : 현재 실행 중인 Node.js 프로세스에 대한 정보와 제어를 제공함
// 전역으로 사용 가능 But require 또는 import를 통해 명시적으로 호출해 사용하는 것이 좋음

/*
프로세스 객체는 EventEmitter의 인스턴스로 다음과 같은 이벤트가 발생 시 리스너를 등록 가능

beforeExit : Node.js가 이벤트 루프를 비우고 예약할 추가 작업이 없을 때 발생되는 이벤트
exit : process.exit()를 호출하거나 Node.js 이벤트 루프가 더 이상 수행할 추가 작업이 없을 때 발생
disconnect : Node.js 프로세스가 IPC 채널로 생성된 경우 IPC 채널이 닫힐 때 발생
message : Node.js 프로세스가 IPC 채널로 생성된 경우 childprocess.send()를 사용해
상위 프로세스가 보낸 메시지를 하위 프로세스에게 수신할 때마다 발생

-> 이외에도 여러 이벤트 많음
 */

const process = require("process");

process.on('beforeExit', (code) => {
    console.log('2. 이벤트 루프에 등록된 작업이 모두 종료 후 노드 프로세스를 종료하기 직전: ', code);
});

process.on('exit', (code) => {
    console.log('3. 노드 프로세스가 종료될 때 : ', code);
});

console.log('1. 콘솔에 출력되는 첫 메시지');

/* 출력
1. 콘솔에 출력되는 첫 메시지
2. 이벤트 루프에 등록된 작업이 모두 종료 후 노드 프로세스를 종료하기 직전:  0
3. 노드 프로세스가 종료될 때 :  0
 */