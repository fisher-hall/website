var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'index.html',
    controller  : 'IndexController'
  })

  .when('/About', {
    templateUrl : 'About.html',
    controller  : 'AboutController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('IndexController', function($scope) {
    $scope.message = 'Hello from HomeController';
  });
  
  
  app.controller('AboutController', function($scope) {
    $scope.message = 'Hello from AboutController';
  });