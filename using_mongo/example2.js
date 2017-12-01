var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost/hta";

mongoClient.connect(url, function(err, db){
    if(err) throw err;
    console.log('db에 연결됨');
    
    /*db.collection('users').find({}).toArray(function(err, result){
        if(err) throw err;
        console.log('조회성공');
        console.log(result);
        
        db.close();
    });*/
    
    db.collection('users').findOne({_id:100}, function(err, result){
      
        if(err) throw err;
        console.log("죄회성공");
        console.log(result);
        
        db.close();
    })
    
})