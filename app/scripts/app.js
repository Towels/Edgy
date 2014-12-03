'use strict';

/**
 * @ngdoc overview
 * @name edgyApp
 * @description
 * # edgyApp
 *
 * Main module of the application.
 */
angular
  .module('edgyApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngDialog'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/shop', {
        templateUrl: 'views/shop.html',
        controller: 'ShopCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/nope', {
        templateUrl: 'views/nope.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/nope'
      });
  });
