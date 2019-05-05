'use strict';
var app = angular.module("myApp", ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'homeCtrl'
  });

  $routeProvider.when('/HallStaff', {
    templateUrl: 'HallStaff.html',
    controller: 'HallStaffCtrl'
  });

  $routeProvider.when('/HallGov', {
    templateUrl: 'HallGov.html',
    controller: 'HallGovCtrl'
  });

  $routeProvider.when('/FisherRegatta', {
    templateUrl: 'FisherRegatta.html',
    controller: 'FisherRegattaCtrl'
  });

  $routeProvider.when('/FisherFunk', {
    templateUrl: 'FisherFunk.html',
    controller: 'FisherFunkCtrl'
  });

  $routeProvider.when('/FredTalks', {
    templateUrl: 'FredTalks.html',
    controller: 'FredTalksCtrl'
  });

  $routeProvider.when('/About', {
    templateUrl: 'About.html',
    controller: 'AboutCtrl'
  });

  $routeProvider.when('/Alumni', {
    templateUrl: 'Alumni.html',
    controller: 'AlumniCtrl'
  });

  $routeProvider.when('/WelcomeWeekend', {
    templateUrl: 'WelcomeWeekend.html',
    controller: 'WelcomeWeekendCtrl'
  });

  $routeProvider.otherwise({redirecTo: '/'});
}]);


app.controller('homeCtrl', ['$scope', function($scope){
    $scope.message = '';
}]);

app.controller('HallStaffCtrl', ['$scope', function($scope){
    $scope.message = '';
}]);

app.controller('HallGovCtrl', ['$scope', function($scope) {
    $scope.message = '';
}]);

app.controller('FisherRegattaCtrl', ['$scope', function($scope){
    $scope.message = '';
}]);

app.controller('FisherFunkCtrl', ['$scope', function($scope){
    $scope.message = '';
}]);

app.controller('FredTalksCtrl', ['$scope', function($scope){
    $scope.message = '';
}]);

app.controller('AboutCtrl', ['$scope', function($scope) {
    $scope.message = '';
}]);

app.controller('AlumniCtrl', ['$scope', function($scope){
    $scope.message = '';
}]);

app.controller('WelcomeWeekendCtrl', ['$scope', function($scope){
    $scope.message = '';
}]);