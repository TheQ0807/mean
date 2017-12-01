var express = require('express'),
    UserModel = require('../models/usermodel'),
    PostModel = require('../models/postmodel');

var router = express.Router();
router.use(function(req, res, next){
    if(req.session['LOGIN_USER']){
        next();
    } else {
        next(new Error('내 게시판 조회및 등록은 로그인 후 사용가능한 서비스 입니다.'));
    }
});

router.get("/home.do", function(req, res){
    res.render('posts/home');
});

router.get("/getail.do", function(req,res){
    PostModel.find({},function(err, results){
        if (err) throw err;
        res.send(results);
    })
})

router.post("/add.do", function(req, res){
    var title = req.body.title;
    var contents = req.body.contents;
    
    var post = new PostModel();
    post._id = Date.now();
    post.title = title;
    post.contents = contents;
    post.userid = req.session['LOGIN_USER'].userid;
    
    post.save(function(err, result){
        if(err) throw err;
       /* 
        UserModel.findOne({userid:req.session['LOGIN_USER'].userid}, function(err, user){
            if (err) throw err;
            result.user = user;
            res.send(result);
        })*/
        
        res.send(result);
        
    })
    
});

module.exports = router;