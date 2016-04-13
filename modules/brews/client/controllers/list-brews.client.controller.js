(function () {
  'use strict';

  angular
    .module('brews')
    .controller('BrewsListController', BrewsListController);

  BrewsListController.$inject = ['BrewsService'];

  function BrewsListController(BrewsService) {
    var vm = this;

    vm.brews = BrewsService.query();
  }
})();
