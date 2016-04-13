(function() {
  'use strict';

  // Brews controller
  angular
    .module('brews')
    .controller('BrewsController', BrewsController);

  BrewsController.$inject = ['$scope', '$state', 'Authentication', 'brewResolve'];

  function BrewsController($scope, $state, Authentication, brew) {
    var vm = this;

    vm.authentication = Authentication;
    vm.brew = brew;
    vm.brews = [];
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.toggleFavorite = toggleFavorite;
    vm.save = save;
    vm.showModal = false;

    vm.toggleModal = function() {
      vm.showModal = !vm.showModal;
    };

    vm.countFavorites = function(brews) {
      var favorites = 0
      for (var brew = 0; brew < brews.length; brew++) {
        if (brews[brew]['favorite'] === 1) {
          favorites++
        }
      }
      return favorites
    }

    vm.brew.$list(function(userData) {
      vm.brews = userData['brews']
      vm.tile_stats = [{
        title: 'Your Brews:',
        icon: 'fa fa-coffee',
        value: vm.brews.length
      }, {
        title: 'Your Favorites:',
        icon: 'fa fa-diamond',
        value: vm.countFavorites(vm.brews)
      }, {
        title: 'Coffee Streak:',
        icon: 'fa fa-cogs',
        value: 0
      }]
    });

    vm.getNumber = function(num) {
      return new Array(num);
    }

    vm.mood = 0;
    vm.moodMax = 10;
    vm.taste = 0;
    vm.tasteMax = 10;
    vm.hoveringTaste = function(value) {
      vm.overTaste = value;
      vm.percent = 100 * (value / vm.tasteMax);
    };
    vm.leavingTaste = function() {
      vm.overTaste = 0;
    }
    vm.hoveringMood = function(value) {
      vm.overMood = value;
      vm.percent = 100 * (value / vm.moodMax);
    };

    vm.leavingMood = function() {
      vm.overMood = 0;
    }

    // Remove existing Brew
    function remove(brew) {
      vm.brew._id = brew._id
      if (confirm('Are you sure you want to delete?')) {
        vm.brew.$delete();
      }
      $state.go($state.current, {}, {
        reload: true
      })
    }

    function toggleFavorite(brew) {
      vm.brew._id = brew._id
      vm.brew.favorite = brew.favorite === 0 ? 1 : 0;
      vm.brew.$update()
      $state.go($state.current, {}, {
        reload: true
      })
    }

    // Save Brew
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.brewForm');
        return false;
      }

      if (vm.brew._id) {
        vm.brew.$update(successCallback, errorCallback);
        vm.toggleModal()
      } else {
        vm.brew.$save(successCallback, errorCallback);
        vm.toggleModal()
      }

      function successCallback(res) {
        $state.go($state.current, {}, {
          reload: true
        })
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
})();
