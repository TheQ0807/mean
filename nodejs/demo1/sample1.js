// nodejs 전역객체 - 아무조건, 선언 없이 즉시 사용가능한객체
// console 객체(콘솔창에 결과를 표시하는 객체)
//      .log(메세지) : 메세지 출력
//      .dir(객체)  : 객체의 속성들을 출력
//      .time("id"), .timeEnd("id") : 실행시간을 측정해서 출력한다.
// exports객체(모듈을 다루는 객체)
// process 객체(프로세스 실행과 관련된 정보를 다루는 객체)
//          .exit() : 실행을 종료한다.
console.time("t1");
console.log('Hello, nodejs!');
console.timeEnd("t1");