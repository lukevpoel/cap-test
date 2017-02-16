'use strict';

/**
 * @ngdoc function
 * @name capTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the capTestApp
 */
angular.module('capTestApp')
  .controller('MainCtrl', function ($scope, events) {
    $scope.events = events.query();

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
