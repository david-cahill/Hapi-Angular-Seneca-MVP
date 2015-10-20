(function () {
  'use strict';

  angular.module('hapiAngularSenecaMVP')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");
      $stateProvider
        .state("home", {
          url: "/",
          templateUrl: '/home/templates/index',
          controller: 'homepage-controller'
        });
    }]);
})();
