'use strict';


// Declare app level module which depends on filters, and services
angular.module('expbtc', ['expbtc.filters', 'expbtc.services', 'expbtc.directives', 'expbtc.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.when('/prod-list', {templateUrl: 'partials/prod-list.html', controller: 'ProdListCtrl'});
    $routeProvider.otherwise({redirectTo: '/prod-list'});
  }]);
