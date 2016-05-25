(function () {
  'use strict';

  angular
    .module('uploads.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('uploads', {
        abstract: true,
        url: '/uploads',
        template: '<ui-view/>'
      })
      /*.state('uploads.list', {
        url: '',
        templateUrl: 'modules/articles/client/views/list-articles.client.view.html',
        controller: 'UploadListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Images List'
        }
      })*/
      .state('uploads.images', {
        url: '/images',
        templateUrl: 'modules/uploads/client/views/form-uploads.client.view.html',
        controller: 'UploadsController',
        controllerAs: 'vm',
        resolve: {
          uploadResolve: newUploads
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Upload Images'
        }
      })
     /*/ .state('uploads.edit', {
        url: '/:articleId/edit',
        templateUrl: 'modules/articles/client/views/form-article.client.view.html',
        controller: 'UploadsController',
        controllerAs: 'vm',
        resolve: {
          articleResolve: getArticle
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Edit Article {{ articleResolve.title }}'
        }
      })
      .state('uploads.view', {
        url: '/:articleId',
        templateUrl: 'modules/articles/client/views/view-article.client.view.html',
        controller: 'ArticlesController',
        controllerAs: 'vm',
        resolve: {
          articleResolve: getArticle
        },
        data: {
          pageTitle: 'Article {{ articleResolve.title }}'
        }
      });*/
  }

  getUploads.$inject = ['$stateParams', 'UploadService'];

  function getUploads($stateParams, UploadService) {
    return UploadService.get({
      imageId: $stateParams.imageId
    }).$promise;
  }

  newUploads.$inject = ['UploadService'];

  function newUploads(UploadService) {
    return new UploadService();
  }
}());
