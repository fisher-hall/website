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
    $window.location.reload();
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


//Countdown
var countDownDate = new Date("Apr 25, 2020 13:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the results
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;


  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
