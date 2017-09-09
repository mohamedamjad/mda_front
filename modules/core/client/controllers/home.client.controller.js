'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
 function($scope, Authentication) {
 // This provides Authentication context.
   $scope.authentication = Authentication;

   angular.extend($scope, {
     center: {
       lat: 48.8454572460595,
       lng: 2.36038148403168,
       zoom: 17
     },
     defaults: {
       scrollWheelZoom: true
     },
   });
 }
]);
