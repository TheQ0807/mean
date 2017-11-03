var obj = {
    multiple: function(a,b){
        return a * b;
    },
    divide : function(a,b){
        return a/b;
    }
};

// 객체를 모듈을 통해서 노출시킬때는
// module.exports를 사용한다.
module.exports = obj;
