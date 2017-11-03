var express = require('express'),
    path = require('path');

var app = express();

// app.set('views', 경로)는 뷰템플릿 파일이 위치한 디렉토리 경로를 설정한다.
app.set('views', path.join(__dirname, 'view_templates'));
// app.set('view engine','템플릿 엔진 모듈이름')
app.set('view engine','ejs');

app.get('/list.do', function(req, res){
    // res.render('뷰템플릿', 모델 객체)
    res.render('list',{
        type:"현재 재직중인 사원리스트",
            employees:[
                {no:100, name:'김유신', dept:"총무부"},
               {no:101, name:'강감찬', dept:"비서실"},
               {no:102, name:'이순신', dept:"경리부"},
               {no:103, name:'이기열', dept:"영업부"}
        ]
        });
})

app.listen(3000, function(){
    console.log('웹서버가 시작되었습니다.');
})