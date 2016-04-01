'use strict';

angular.module('brews').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Your Brews',
      state: 'brews',
      roles: ['user']
    });
  }
]);
