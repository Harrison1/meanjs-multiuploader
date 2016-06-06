(function () {
  'use strict';

  angular
    .module('uploads.services')
    .factory('uploadService', uploadService);

  uploadService.$inject = ['$resource', '$q', '$http'];

  function uploadService($resource,$q,$http) {
      
      
      var List = function () {
      var deferred = $q.defer();
      $http({
        method:"GET",
        url :"/api/uploads/"
      }).success(function (res){
          
        deferred.resolve(res);
      }).error(function(err){

        deferred.reject(err);
      });
      return deferred.promise;
    }
      
     var Create = function (data) {
         
      var deferred = $q.defer();
      $http({
        method:"POST",
        url :"/api/uploads/",
        data:data,
      }).success(function (res){

        deferred.resolve(res);
      }).error(function(err){

        deferred.reject(err);
      });
      return deferred.promise;
    }
    
    
    // Public API
    return {
      //read   : Read,
      list   : List,
      create : Create,
      //update : Update,
    };
    
  }
}());
