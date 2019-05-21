// Code goes here

(function() {
  var MainController = function($scope, $interval, $location) {


    var decrementCountdown = function() {
      $scope.countdown--;
      if ($scope.countdown < 1)
        $scope.search($scope.username);
    };

    var countdownInterval = null;

    var startCountdown = function() {
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    }

    $scope.username = 'angular';
    $scope.countdown = 5;
    startCountdown();

    $scope.search = function(username) {
      if (countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
      //
      $location.path(`/user/${username}`)

    }

  }

  var app = angular.module("githubViewer");

  app.controller("MainController", MainController);

}());