//Brews service used to communicate Brews REST endpoints
(function () {
  'use strict';

  angular
    .module('brews')
    .factory('BrewsService', BrewsService);

  BrewsService.$inject = ['$resource'];

  function BrewsService($resource) {
    return $resource('api/brews/:brewId', {
      brewId: '@_id'
    }, {
      update: {
        method: 'PUT'
      },
      list: {
        method: 'GET'
      },
      delete: {
        method: 'DELETE',
      }
    });
  }
})();
