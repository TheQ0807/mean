var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    bodyParser = require('body-parser');

// express 웹객체 만들기
var app = express();

// 뷰템플릿 경로 설정하기
app.set('views', path.join(__dirname, 'view_templates'));
// 뷰템플릿 엔진 저장하기
app.set('view engine', 'ejs');

// 미들웨어 함수 등록하기
// 로거 출력 미들웨어, 정적컨텐츠 제공 미들웨어, 폼입력값 처리 미들웨어, 
// 404에러 처리 미들웨어, 500에러 처리 미들웨어 등을 등록한다.

// 로거 설정하기
app.use(logger('dev'));

// 폼입력값처리 미들웨어 함수 설정하기
// enctype이 "application/x-www-form-urlencoded" 형식의 폼 데이터 처리
//      title=연습&writer=홍길동&messages=안녕학세요 와같은 형식의 폼입력값을
//      해석해서 {title:"연습", writer:"홍길동", messages:"안녕하세요"}로 변환하고
//      req.body에 담아둔다.
app.use(bodyParser.urlencoded({extended:false}));


// 방명록을 저장하는 배열 정의하기
var entries = [];

// url리부팅
// 요청url과 요청핸들러 미들웨어함수를 매핑시킴
app.get('/home.do', function(req, res){
    res.render('home', {guestbooks:entries});
});

app.get('/add.do', function(req, res){
    res.render('form');
});

app.post('/add.do', function(req, res){
    // 폼 입력값 추출
    var titleVal = req.body.title;
    var writerVal = req.body.writer;
    var messagesVal = req.body.messages;
    
    entries.push({
        title:titleVal,
        writer:writerVal,
        messages:messagesVal,
        published:new Date()
    });
    
    res.redirect('home.do');
});

app.get('/del.do', function(req, res){
    var index = req.query.no;
    
    entries.splice(index, 1);
    
    res.redirect('home.do');
});

// 404 에러처리 미들웨어 함수 설정하기
// 여기에 없는게 오면 처리해줄것
// url리부팅에서 나열된 url과 요청url이 일치하지 않을 때 실행된다.
// use로 되있을때는 무조건 실행된다. url을 명시하지 않았을때.
// 항상 url라우팅 설정의 맨끝에 설정된다.
app.use(function(req, res){
    res.status(404).render('404err');
    // res.render는 무조건 응답을 보내는 것이기때문에 이것이 맨위에 있어서는 안된다. 그래서 무조건 맨아래에 있어야한다.
});

// 500 에러처리 미들웨어 함수 설정하기
// 요청처리중 에러가 발생했들때 실행된다.
// 매개변수가 무조건 4개여야 한다.
app.use(function(err, res, res, next){
    res.status(500).render('500err');
});

app.listen(3000, function(){
    console.log("웹서버가 실행되었습니다.");
});






























