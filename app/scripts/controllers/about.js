'use strict';

/**
 * @ngdoc function
 * @name edgyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the edgyApp
 */
angular.module('edgyApp')
.controller('AboutCtrl', function ($scope, $http, $filter) {
	var orderBy = $filter('orderBy');
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

    $scope.reverse = false;
    $scope.order = function(){
    	$scope.items = orderBy($scope.items, 'id', $scope.reverse);
        $scope.reverse = !($scope.reverse);
    };

    $scope.cart = [];
  	$scope.tempProduct = {};
    $scope.addToCart = function(product){
    	$scope.tempProduct.name = product.name;
    	$scope.tempProduct.price = product.price;
    	$scope.cart.push($scope.tempProduct);
    	$scope.tempProduct = {};
    };
    $scope.removeFromCart = function(product){
    	$scope.cart.pop(product);
    };

    $scope.total = function(){
    	var res = 0;
    	for(var i = 0; i< $scope.cart.length; i++){
    		res = $scope.cart[i].price + res;
    	}
    	return res;
    };
});
