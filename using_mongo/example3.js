var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost/hta";

mongoClient.connect(url, function(err, db){
    
    if(err) throw err;
    /*
    update user
    set
        name ="유관순",
        email="ryu@gmail.com"
    where
        _id = 100;
    */
    
    /*
    db.collection('users').updateOne({_id:100},{name:"유관순", email:"ryu@gmail.com"}, function(err, result){
    
        if(err) throw err;
        
        console.log('문서업데이트');
        console.log(result);
        db.close();
    });*/
    
  /*  db.collection('users').updateOne({_id:200},{$set:{email:"sin@gmail.com"}}, function(err, result){
    
        if(err) throw err;
        
        console.log('문서업데이트');
        console.log(result);
        db.close();
    });*/
    
    
       db.collection('users').updateOne({_id:200},{$set:{email:"sin@gmail.com"}}, function(err, result){
    
        if(err) throw err;
        
        console.log('문서업데이트');
        console.log('수정된 문서의 갯수', result.modifiedCount);
        db.close();
    });
    
})