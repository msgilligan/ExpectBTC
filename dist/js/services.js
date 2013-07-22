'use strict';

/* Services */

angular.module('expbtc.services', ['ngResource']).
    value('version', '0.1').
    factory('Item', function($resource) {
    var Item = $resource('https://api.target.com/v2/items/',
                        {key: "61BCiIkZESjtZlW9RnA3PxwuK4dRvr1W"}, {
                        'get': {method:'GET', cache: true},
                        'query': {method: 'JSONP', headers: {"Content-Type": "application/json"}, params: {Keywords: 'socks', ResponseGroups: 'ItemAttributes,Offers', callback: 'JSON_CALLBACK'}, isArray:false, cache: false},
                        });
    return Item;
    }).
    factory('Ticker', function($resource) {
    var Tick = $resource('http://www.corsproxy.com/blockchain.info/ticker',
                        {}, {
                        'query': {method: 'GET', params: {}, isArray:false, cache: false},
                        });
    return Tick;
    });

