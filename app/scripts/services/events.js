'use strict';

/**
 * @ngdoc service
 * @name capTestApp.events
 * @description
 * # events
 * Factory in the capTestApp.
 */
angular.module('capTestApp')
  .factory('events', function ($resource, response) {
    // Service logic
    // ...
    response.addHeader('Access-Control-Allow-Origin', '*');


    // Public API here
    return $resource('http://api.eventful.com/json/events/search?q=music&l=:location&within=10&units=miles&t=This+Week&c=music&keywords=rock&app_key=mhNWqRwCNqmxbkrL',{}, {
      query: {
        method:'GET',
        params:{
          location: 'Seattle'
        },
        isArray:false
      }
    });
  });
