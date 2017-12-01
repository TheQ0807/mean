angular.module('myApp')
.controller('todoCtrl', function($scope, todoService){
    
    $scope.todos = todoService.getAllTodos();
    
})