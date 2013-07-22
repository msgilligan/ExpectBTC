'use strict';

/* Controllers */

angular.module('expbtc.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('ProdListCtrl', ['$scope', 'Item', 'Ticker', function($scope, Item, Ticker) {
    $scope.items = [];
	$scope.itemResp = Item.query([], function(items) {
	    for(var i=0; i<items.ItemSearchResponse.Items.Item.length; i++) {
	        if (items.ItemSearchResponse.Items.Item[i].OfferSummary != undefined) {
	            $scope.items.push(items.ItemSearchResponse.Items.Item[i]);
	        }
	    } 
	}, function() {
	});
	$scope.ticker = Ticker.query([]);
  }]);
