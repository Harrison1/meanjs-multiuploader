(function () {
  'use strict';

  angular
    .module('uploads')
    .controller('UploadListController', UploadListController);

  UploadListController.$inject = ['UploadService'];

  function UploadListController(UploadService) {
    var vm = this;

    vm.articles = UploadService.query();
  }
}());
