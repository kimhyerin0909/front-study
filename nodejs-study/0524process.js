// Process : 현재 실행 중인 Node.js 프로세스에 대한 정보와 제어를 제공함
// 전역으로 사용 가능 But require 또는 import를 통해 명시적으로 호출해 사용하는 것이 좋음

/*
프로세스 객체는 EventEmitter의 인스턴스로 다음과 같은 이벤트가 발생 시 리스너를 등록 가능
beforeExit : Node.js가 이벤트 루프를 비우고 예약할 추가 작업이 없을 때 발생되는 이벤트
 */