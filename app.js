'use strict';
var app = angular.module("myApp", ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'homeCtrl'
  });

  $routeProvider.when('/HallGov', {
    templateUrl: 'HallGov.html',
    controller: 'HallGovCtrl'
  });

  $routeProvider.when('/About', {
    templateUrl: 'About.html',
    controller: 'AboutCtrl'
  });
  $routeProvider.otherwise({redirecTo: '/'});
}]);


app.controller('homeCtrl', ['$scope', function($scope){
    $scope.message = 'Welcome to Inspire';
}]);

app.controller('HallGovCtrl', ['$scope', function($scope) {
    $scope.message = 'Everyone come and see how good I look!';
}]);

app.controller('AboutCtrl', ['$scope', function($scope) {
    $scope.message = 'These are clients';
}]);