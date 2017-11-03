// fs모듈 - 파일을 다루는 모듈, nodejs 내장모듈
// .readfile(filename, [encoding], 콜백함수)
// .writefile(filename, data, [encoding],[콜백함수])

var fs = require('fs');

// 파일 기록하기
/*
fs.writeFile("./output/sample.txt",'안녕하세요','utf-8',function(err){
    if(err) {
        console.log("파일 쓰기 도중 에러 발생", err);
        return;
    }
    console.log('파일 쓰기 성공');
});
*/

// 파일 읽기
fs.readFile("./output/sample.txt","utf-8",function(err, data){
    if(err){
        throw eff;
    }
    console.log(data);
})

