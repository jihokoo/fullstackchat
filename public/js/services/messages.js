'use strict';

//Articles service used for articles REST endpoint
angular.module('fullstackchat.services.messages', []).factory('Messages', ['$resource', function($resource) {
    return $resource('messages/:messageId', {
        messageId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);
