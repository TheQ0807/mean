// mongoose의 Todo모델 객체 획득
var Todo = require('./models/todo');

// Todo 모델객체 생성
var todo = new Todo();
todo._id = 100;
todo.title = "연습";
todo.description = "연습입니다.";
todo.start_date = '2017-11-08';
todo.create_date = new Date();

// Todo모델객체를 저장 ------> mongodb crud함수가 내부적으로 실행됨
todo.save(function(err){
    if(err) throw err;
    console.log('저장완료');
})