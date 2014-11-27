'use strict';

/**
 * @ngdoc function
 * @name edgyApp.controller:TabCtrl
 * @description
 * # TabCtrl
 * Controller of the edgyApp
 */
angular.module('edgyApp')
  .controller('TabCtrl', function(){
    this.tab = 0;
    this.setTab = function(newTab){
      this.tab = newTab;
    };
    this.isTab = function(checkTab){
      return this.tab === checkTab;
    };
  });
