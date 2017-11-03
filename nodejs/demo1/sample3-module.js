// 사용자정의 모듈 작성하기
// exports 내장객체를 사용해서 사용자정의 모듈을 만든다.
// exports 내장객체에 사용자가 구현한 재사용가능한 기능을 담으면
// 다른 애플리케이션 require()메소드를 사용해서 포함시킨 다음 사용할 수 있다.
var PI = 3.14; //  exports에 넣지 않은것은 자연스럽게 은닉화가 된다. 노출되지 않는다.

exports.add = function(a,b){
    return a + b;
}
exports.minus = function(a,b){
    return a - b;
}
exports.area = function(r){
    return PI*r*r;
}