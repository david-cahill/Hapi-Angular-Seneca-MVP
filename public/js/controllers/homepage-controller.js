(function () {
  'use strict';

  function homepageController ($scope, itemService) {
    $scope.item = {};
    itemService.getItemID(function (result) {
      $scope.item.id = result.id;
    });
  }
  
  angular.module('hapiAngularSenecaMVP')
    .controller('homepage-controller', ['$scope', 'itemService', homepageController]);

})();

