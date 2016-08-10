'use strict';

angular.module('myApp.stud', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/stud', {
        templateUrl: 'stud/stud.html',
        controller: 'studCtrl'
    });
}])

.controller('studCtrl', ['$scope', '$firebase', 'CommonProp', function($scope, $firebase, CommonProp) {
    $scope.username = CommonProp.getUser();
    var firebaseObj = new Firebase("jssate.firebaseio.com/students");


    var sync = $firebase(firebaseObj);

    $scope.articles = sync.$asArray();
}]);