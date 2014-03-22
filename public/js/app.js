'use strict';

angular.module('fullstackchat', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.router', 'fullstackchat.controllers', 'fullstackchat.services']);


angular.module('fullstackchat.controllers', [
  'fullstackchat.controllers.header',
  'fullstackchat.controllers.messages',
  'fullstackchat.controllers.index'
  ]);

angular.module('fullstackchat.services', [
  'fullstackchat.services.global',
  'fullstackchat.services.messages'
  ]);
