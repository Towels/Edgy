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

    $scope.items = [{
        "id": 2,
        "name": "Red Towel",
        "desc": "Should not be trusted around hairdryers and bathtubs.",
        "price": 2.45,
        "inStock": true
    },
    {
        "id:": 3,
        "name": "Green Towel",
        "desc": "A towel so green, it drives a Toyota Prius and occasionally holds speaks about the green house effect.",
        "price": 3.95,
        "inStock": true
    },
    {
        "id": 1,
        "name": "Yellow Towel",
        "desc": "A yellow towel. Nothing to see here.",
        "price": 0,
        "inStock": true
    },
    {
        "id": 200,
        "name": "Not a Towel",
        "desc": "Something that obviously is not a towel.",
        "price": 2.20,
        "instock": false
    }]   
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
            
});
