'use strict';

/**
 * @ngdoc service
 * @name capTestApp.current
 * @description
 * # current
 * Factory in the capTestApp.
 */
angular.module('capTestApp')
  .factory('current', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
