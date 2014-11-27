'use strict';

/**
 * @ngdoc function
 * @name edgyApp.controller:ShopCtrl
 * @description
 * # ShopCtrl
 * Controller of the edgyApp
 */
angular.module('edgyApp')
.controller('ShopCtrl', function ($scope, $http) {
    $http
    	.get('data/items.json')
    	.then(function(res){
    		$scope.items = res.data;                
        });
});
