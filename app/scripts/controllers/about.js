'use strict';

/**
 * @ngdoc function
 * @name edgyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the edgyApp
 */
angular.module('edgyApp')
.filter('object2Array', function(){
    return function(input) {
      var out = []; 
      for(var i in input){
        out.push(input[i]);
      }
      return out;
    };
})
.controller('AboutCtrl', function ($scope, $http, $filter, ngDialog) {
	
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
    	$scope.items = $filter('orderBy')($scope.items, 'id', $scope.reverse);
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

    $scope.shipping = false;
    $scope.shippingCost = 3.5;
    $scope.total = function(){
    	var res = 0;
        $scope.shipping = false;
    	for(var i = 0; i< $scope.cart.length; i++){
    		res += $scope.cart[i].price;
    	}
        if(res < 20 && $scope.cart.length > 0){
            $scope.shipping = true;
            res += $scope.shippingCost;
        }
    	return res;
    };

    $scope.go = function() {
        if($scope.total() > 0){
            $scope.cart = [];
            ngDialog.open({template: 'views/success.html'});
        }
    };
});
