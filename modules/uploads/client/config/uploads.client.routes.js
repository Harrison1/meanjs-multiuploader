'use strict';

//Setting up route
angular.module('uploads.routes').config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',
	function($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

     $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

  $urlRouterProvider.otherwise('/uploads');
	$stateProvider
	.state('uploads', {
        url:'/uploads',
        template: '<ui-view/>',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return
                $ocLazyLoad.load(
                {
                  
                })
                
            }
        }
     })
    .state('uploads.images', {
      url: '/images',
      templateUrl: 'modules/uploads/client/views/form-uploads.client.view.html',
      controller: 'UploadsController',
      controllerAs: 'vm',
    })
    /*.state('admin.static-pages', {
      url: '/pages',
      templateUrl: 'modules/admin/client/views/pages/static-pages/index.html',
      controller: 'StaticPagesController',
      controllerAs: 'vm',
    })*/
    
     
   
  }]);
