(function () {
  'use strict';

  angular
    .module('brews')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Brews',
      state: 'brews',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'brews', {
      title: 'My Brews',
      state: 'brews.list',
      roles: ['user']
    });
  }
})();
