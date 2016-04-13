(function () {
  'use strict';

  angular
    .module('brews')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('brews', {
        abstract: true,
        url: '/brews',
        template: '<ui-view/>'
      })
      .state('brews.list', {
        url: '',
        templateUrl: 'modules/brews/client/views/brews.client.view.html',
        controller: 'BrewsController',
        controllerAs: 'vm',
        resolve: {
          brewResolve: newBrew
        },
        data: {
          pageTitle: 'Brews List'
        }
      });
  }

  getBrew.$inject = ['$stateParams', 'BrewsService'];

  function getBrew($stateParams, BrewsService) {
    return BrewsService.get({
      brewId: $stateParams.brewId
    }).$promise;
  }

  newBrew.$inject = ['BrewsService'];

  function newBrew(BrewsService) {
    return new BrewsService();
  }
})();
