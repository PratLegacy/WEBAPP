'use strict';

angular.module('myApp.addPost', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addPost', {
    templateUrl: 'addPost/addPost.html',
    controller: 'AddPostCtrl'
  });
}])

.controller('AddPostCtrl', ['$scope','$firebase',function($scope,$firebase) {
    $scope.AddPost = function(){
	var title = $scope.article.title;
        var post = $scope.article.post;
	
	var firebaseObj = new Firebase("https://jssate.firebaseio.com/Articles");
    	var fb = $firebase(firebaseObj);

	fb.$push({ title: title,post: post}).then(function(ref) {
  		console.log(ref);
		$location.path('/welcome');
	}, function(error) {
  		console.log("Error:", error);
	});

    }
	$scope.logout = function(){
    CommonProp.logoutUser();
}
}]);

