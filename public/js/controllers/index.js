'use strict';

angular.module('fullstackchat.controllers.index', []).controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
}]);
