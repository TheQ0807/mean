var express = require('express'),
    serveStatic = require('serve-static'),
    path = require('path');

var app = express();

// 정적컨텐츠(html, css, js, images)를 제공하는 미들웨어 함수 등록하기
var staticContentPath = path.join(__dirname, 'public');
app.use(serveStatic(staticContentPath));
console.log(staticContentPath);


app.listen(3000, function(){
   console.log('웹서버가 시작되었습니다.'); 
});
