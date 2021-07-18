'use strict';
var app = angular.module("myApp", ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'pages/home.html',
    controller: 'homeCtrl'
  });

  $routeProvider.when('/HallStaff', {
    templateUrl: 'pages/hall_staff.html',
    controller: 'HallStaffCtrl'
  });

  $routeProvider.when('/HallGov', {
    templateUrl: 'pages/hall_gov.html',
    controller: 'HallGovCtrl'
  });

  $routeProvider.when('/FisherRegatta', {
    templateUrl: 'pages/fisher_regatta.html',
    controller: 'FisherRegattaCtrl'
  });

  $routeProvider.when('/FisherFunk', {
    templateUrl: 'pages/fisher_funk.html',
    controller: 'FisherFunkCtrl'
  });

  $routeProvider.when('/FredTalks', {
    templateUrl: 'pages/fred_talks.html',
    controller: 'FredTalksCtrl'
  });

  $routeProvider.when('/About', {
    templateUrl: 'pages/about.html',
    controller: 'AboutCtrl'
  });

  $routeProvider.when('/Alumni', {
    templateUrl: 'pages/alumni.html',
    controller: 'AlumniCtrl'
  });

  $routeProvider.when('/WelcomeWeekend', {
    templateUrl: 'pages/welcome_weekend.html',
    controller: 'WelcomeWeekendCtrl'
  });

  $routeProvider.when('/StAdalberts', {
    templateUrl: 'pages/st_adalberts.html',
    controller: 'StAdalbertsCtrl'
  });

  $routeProvider.otherwise({redirectTo: '/'});
}]);


app.controller('homeCtrl', ['$scope', function($scope){
    $scope.message = '';
    console.log('welcom to home');
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
app.controller('StAdalbertsCtrl', ['$scope', function($scope){
  $scope.message = '';
}]);


// Countdown
// to whoever the new maintainer is - put the date for the next Regatta in here
var countDownDate = new Date("April 30, 2022 13:00:00").getTime();

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
