'use strict';

angular.module('myApp.addmarks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addmarks', {
    templateUrl: 'addmarks/addmarks.html',
    controller: 'addmarksCtrl'
  });
}])

