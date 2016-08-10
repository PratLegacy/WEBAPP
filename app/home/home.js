'use strict';

angular.module('myApp.home', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope','$location','CommonProp','$firebaseAuth',function($scope,$location,CommonProp,$firebaseAuth) {
 var firebaseObj = new Firebase("https://jssate.firebaseio.com");
    var loginObj = $firebaseAuth(firebaseObj);
  
  $scope.user = {};
  $scope.SignIn = function(e) {
    e.preventDefault();
    var username = $scope.user.email;
    var password = $scope.user.password;
    loginObj.$authWithPassword({
            email: username,
            password: password
        })
        .then(function(user) {
            //Success callback
            console.log('Authentication successful');
	CommonProp.setUser(user.password.email);
		$location.path('/welcome');
        }, function(error) {
            //Failure callback
            console.log('Authentication failure');
        });
}
}])
.service('CommonProp',['$location','$firebaseAuth',function($location,$firebaseAuth) {
    var user = '';
    var firebaseObj = new Firebase("https://blistering-heat-2473.firebaseio.com");
    var loginObj = $firebaseAuth(firebaseObj);
  
    return {
        getUser: function() {
            return user;
        },
        setUser: function(value) {
            user = value;
        },
        logoutUser:function(){
            loginObj.$unauth();
            console.log('done logout');
            $location.path('/home');
        }
    };
}]);