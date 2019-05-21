/*
This github service exposes two methods that can be used in the MainController.
getUser(username: string) -> promise that returns the data of the response
getRepos(user: object) -> promise that returns the data of the response
*/

(function() {

  var github = function($http) {
    var getUser = function(username) {
      return $http.get(`https://api.github.com/users/${username}`)
        .then(function(res) {
          return res.data;
        });
    }

    var getRepos = function(user) {
      return $http.get(user.repos_url)
        .then(function(response) {
          return response.data;
        });
    }

    return {
      getUser: getUser,
      getRepos: getRepos
    };

  };

  var module = angular.module('githubViewer');
  // registring the service with angular
  module.factory("github", github);
}());