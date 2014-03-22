'use strict';

angular.module('fullstackchat.controllers.header', []).controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Chatroom',
        'link': 'chatroom'
    }, {
        'title': 'Create Chatroom',
        'link': 'chatroom/create'
    }];

    $scope.isCollapsed = false;
}]);
