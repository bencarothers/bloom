'use strict';

angular.module('brews').controller('BrewController', ['$scope', 'Authentication', '$state',
  function($scope, Authentication, $state) {

    // This provides Authentication context.
    $scope.authentication = Authentication;

    $scope.showModal = false;

    $scope.toggleModal = function() {
      $scope.showModal = !$scope.showModal;
    };

    $scope.addBrew = function(form){
      console.log(form)
      var newBrew = {
          thumb: 'https://pbs.twimg.com/profile_images/378800000191332506/a02c990aad4d282e7408752175ed04f9.jpeg',
          roaster: form.roaster,
          beans: form.beans,
          grind: form.grind,
          method: form.method,
          taste: form.score,
          mood: form.mood
      }

      form.roaster = ''
      form.beans= ''
      form.grind= ''
      form.method = ''
      form.score = ''
      form.mood= ''

      $scope.brews.push(newBrew)
    }

    $scope.brews = [{
      thumb: 'https://pbs.twimg.com/profile_images/378800000191332506/a02c990aad4d282e7408752175ed04f9.jpeg',
      roaster: 'Kuma',
      beans: 'Carmen Estate',
      method: 'Chemex',
      favorite: = false,
      grind: 21,
      temperature: 21,
      taste: 75,
      grams: 75,
      mood: 10
    }]
    $scope.tile_stats = [{
      title: 'Your Brews:',
      icon: 'fa fa-coffee',
      value: $scope.brews.length
    }, {
      title: 'Your Favorites:',
      icon: 'fa fa-diamond',
      value: 0
    }, {
      title: 'Coffee Streak:',
      icon: 'fa fa-cogs',
      value: 0
    }]

    $scope.getNumber = function(num) {
      return new Array(num);
    }

    $scope.mood= 0;
    $scope.moodMax = 10;

    $scope.taste = 0;
    $scope.tasteMax = 10;

    $scope.hoveringTaste = function(value) {
      $scope.overTaste = value;
      $scope.percent = 100 * (value / $scope.tasteMax);
    };

    $scope.leavingTaste = function() {
      $scope.overTaste = 0;
    }

    $scope.hoveringMood = function(value) {
      $scope.overMood = value;
      $scope.percent = 100 * (value / $scope.moodMax);
    };

    $scope.leavingMood = function() {
      $scope.overMood = 0;
    }
  }
]);
