// nodejs를 사용하는이유
// 웹 어플리케이션 서버를 정말 쉽게 만들수 있다.
var http = require('http'); // import와 동일 http 라이브러리를 넣겠다. 대신 여기선 라이브러리 대신 모듈이라고 지칭한다.

var server = http.createServer(function(req,res) {
    
    res.end("Hello nodejs!!!!!!");
}); // 톰캣을 킨것과 같은 효과를 가짐
// 여기서 function은 콜백 함수라고 한다.
server.listen(3000); // 3000번 포트에서 귀 기울이고 있다.즉 리스너가 3000번 포트에 있다라는 이야기