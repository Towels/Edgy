'use strict';

/**
 * @ngdoc function
 * @name edgyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the edgyApp
 */
angular.module('edgyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
