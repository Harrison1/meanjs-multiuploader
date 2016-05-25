(function () {
  'use strict';

  angular
    .module('uploads.services')
    .factory('UploadService', UploadService);

  UploadService.$inject = ['$resource'];

  function UploadService($resource) {
    return $resource('api/uploads/:imageId', {
      imageId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
}());
