angular.module('loopback-example', ['lbServices'])
.controller('MainCtrl', function($scope, Article, LoopBackAuth, User) {
  $scope.auth = LoopBackAuth;
  $scope.articles = [];

  Article.find().$promise.then(function(list) {
    $scope.articles = list;
  });

  $scope.article = {
    userId: null,
    title: null,
    content: null
  };

  $scope.account = {
    email: null,
    password: null
  };

  $scope.hello = {
    name: null
  };
  
  $scope.helloMessage = null;

  $scope.create = function() {
    Article.create(Object.assign({}, $scope.article, {
      userId: LoopBackAuth.currentUserId
    })).$promise.then(function(created) {
      $scope.articles.push(created);
    });
  }

  $scope.login = function() {
    User.login($scope.account);
  }

  $scope.sayHello = function() {
    Article.sayHello($scope.hello).$promise.then(function(answer) {
      $scope.helloMessage = answer;
    });
  }

});
