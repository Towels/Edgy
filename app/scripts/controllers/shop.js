'use strict';

/**
 * @ngdoc function
 * @name edgyApp.controller:ShopCtrl
 * @description
 * # ShopCtrl
 * Controller of the edgyApp
 */
angular.module('edgyApp')
.controller('ShopCtrl', function ($scope, $http, $filter, ngDialog) {
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
    $scope.addToCart = function(product){
    	var tempProduct = {};
    	tempProduct.name = product.name;
    	tempProduct.price = product.price;
    	$scope.cart.push(tempProduct);
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
