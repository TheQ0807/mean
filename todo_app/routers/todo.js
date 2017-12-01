var express = require('express'),
    TodoModel = require('../models/todomodel');

var router = express.Router();

router.use(function(req, res, next){
    if(req.session['LOGIN_USER']){
        next();
    } else {
        next(new Error('내 일정 조회는 로그인 후 사용가능한 서비스 입니다.'));
    }
});

router.get('/home.do', function(req, res){
    var loginedUserid= req.session['LOGIN_USER'].userid;
    
    TodoModel.find({userid:loginedUserid, completed:false}, function(err, todos){
        if(err) throw err;
        res.render('todo/home', {todos:todos});
    });
});

router.get('/register.do', function(req, res){
    res.render('todo/form');
});

router.post('/register.do', function(req, res){
    var title = req.body.title;
    var dates = req.body.dates;
    var desc = req.body.desc;
    
    var todo = new TodoModel();
    todo._id = Date.now();
    todo.title = title;
    todo.dates = dates;
    todo.desc = desc;
    todo.userid = req.session['LOGIN_USER'].userid;
    
    todo.save(function(err){
        if(err) throw err;
        res.redirect('home.do');
    });
});

router.get('/complete.do',function(req, res){
    var todoId = req.query.id;
    TodoModel.findOne({_id:todoId},function(err,todo){
        if(err) throw err;
        todo.completed = true;
        todo.save(function(err){
            if(err) throw err;
            res.redirect('home.do');
        })
    })
})

module.exports = router;