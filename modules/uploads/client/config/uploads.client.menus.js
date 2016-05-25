(function () {
  'use strict';

  angular
    .module('uploads')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Upload Images',
      state: 'uploads',
      type: 'dropdown',
      roles: ['user']
    });

    // Add the dropdown list item
    /*menuService.addSubMenuItem('topbar', 'uploads', {
      title: 'List My Images',
      state: 'uploads.list'
    }); 
    */

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'uploads', {
      title: 'Upload Images',
      state: 'uploads.images',
      roles: ['user']
    });
  }
}());
