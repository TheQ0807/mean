var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hta', function(){
    console.log("mongodb에 연결됨");
});

var Todo  = mongoose.model('Todo', {
    _id: Number,
    title: String,
    description : String,
    start_date : String,
    createe_date : Date
    
    
})
module.exports=Todo;