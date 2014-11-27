'use strict';

/**
 * @ngdoc function
 * @name edgyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the edgyApp
 */
angular.module('edgyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
