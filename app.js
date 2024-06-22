var app = angular.module('myApp', []);

app.controller('todoCtrl', function($scope) {
  $scope.todoList = [{ todoText: 'Clean House', done: false, editing: false }];

  $scope.todoAdd = function() {
    if ($scope.todoInput) {
      $scope.todoList.push({ todoText: $scope.todoInput, done: false, editing: false });
      $scope.todoInput = "";
    }
  };

  $scope.edit = function(item) {
    item.editing = true;
  };

  $scope.save = function(item) {
    item.editing = false;
  };

  $scope.remove = function(item) {
    var index = $scope.todoList.indexOf(item);
    if (index !== -1) {
      $scope.todoList.splice(index, 1);
    }
  };
});
