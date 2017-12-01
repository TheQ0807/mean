var express = require('express'),
    bodyParser = require('body-parser'),
    expressSession = require('express-session'),
    path = require('path');

var app = express();

// 뷰 템플릿 엔진 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
// 폼 입력값 처리
// 무조건 실행됨(url을 설정안했기 때문에)
app.use(bodyParser.urlencoded({extended:false}));
// json형식의 용청데이터 처
app.use(bodyParser.json());

// 로그인 세션관리
app.use(expressSession({
    secret:'d6VUA3a4d3N7n9N2',          // 암호화키
    resave: false,                      // 세션의 내용이 변경될때만 세션이 재저장되도록 설정한다.
    saveUninitialized: true             // 세션이 저장되기 전에 세션의 상태를 Uninitialized로 만들어서 저장
}));

// 로그인 여부 체크
app.use(function(req, res, next){
    if(req.session['LOGIN_USER']){
       res.locals['logined'] = true;
    } else {
       res.locals['logined'] = false;
    }
    next();
});

app.get('/home.do', function(req, res){
    res.render('home');
});

// todo 나 user 가 오게되면 이쪽으로 가서 실행된다라는것을 표현한것
app.use('/user', require('./routers/user'));
app.use('/todo', require('./routers/todo'));
app.use('/post', require('./routers/post'));

// 404 에러 처리
app.use(function(req, res){
    res.status(404);
    res.render('error/notfound');
});

// 500 에러 처리
app.use(function(err,req, res, next){
    res.status(500);
    res.render('error/servererror',{error:err});
});



app.listen(3000, function(){
    console.log("웹서버가 시작되었습니다...")
});