'use strict';

/**
 * @ngdoc function
 * @name edgyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the edgyApp
 */
angular.module('edgyApp')
.controller('AboutCtrl', function ($scope, $http) {
    $http
    	.get('data/team.json')
    	.then(function(res){
    		$scope.team = res.data;                
        });
    $http
    	.get('data/items.json')
    	.then(function(res){
    		$scope.items = res.data;                
        });
});
