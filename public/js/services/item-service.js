(function () {
  'use strict';

  function itemService (serviceApi) {
    function failBackup (err) {
      if (err) console.error(err);
    }
    return {
      getItemID: function (success, fail) {
        serviceApi.get('item/get-id', success, fail || failBackup);
      }
    };
  }

  angular.module('hapiAngularSenecaMVP')
    .service('itemService', ['serviceApi', itemService]); 
})();