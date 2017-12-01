// mongoClient 객체 획득
var mongoClient = require('mongodb').MongoClient;

// mongodb 서버의 hta데이터베이스 연결 URL
var url = "mongodb://localhost:27017/hta";

// mongodb와 연결하기
mongoClient.connect(url, function(err, db){
    // 연결 실패
    if(err) throw err;
    
    // 연결 성공
    console.log('mongodb에 연결됨');
    
    // 사용자 정보 생성
    var user = [
               {_id:200, name:"이순신", email:"lee@gmail.com", pwd:"zxcv1234", age:50},
               {_id:300, name:"김유신", email:"kim@gmail.com", pwd:"zxcv1234", age:60},
               {_id:400, name:"강감찬", email:"kang@gmail.com", pwd:"zxcv1234", age:80}
        ];
    
    
    // 사용자 정보 저장하기
    db.collection("users").insertMany(user, function(err, result){
        if(err) throw err;
        console.log("사용자정보가 저장되었습니다.");
        // 연결 끊기
        db.close();
    })
    
    
})