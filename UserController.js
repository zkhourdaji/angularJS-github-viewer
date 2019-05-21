// Code goes here

(function() {
  var app = angular.module("githubViewer");

  var UserController = function($scope, github, $routeParams) {

    $scope.username = $routeParams.username;
    $scope.repoSortOrder = '-stargazers_count';

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user)
        .then(onRepos)
        .catch(onError);
    }

    var onRepos = function(data) {
      $scope.user.repos = data;
    }

    var onError = function(error) {
      $scope.error = error;
    }

    github.getUser($scope.username)
      .then(onUserComplete)
      .catch(onError);
  }

  app.controller("UserController", UserController);

}());