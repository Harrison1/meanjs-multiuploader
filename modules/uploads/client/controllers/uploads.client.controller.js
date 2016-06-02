(function () {
  'use strict';

  angular
    .module('uploads')
    .controller('UploadsController', UploadsController);

  UploadsController.$inject = ['$scope', '$state', 'uploadResolve', '$window', 'Authentication'];

  function UploadsController($scope, $state, uploads, $window, Authentication) {
    var vm = this;

    vm.uploads = uploads;
    vm.authentication = Authentication;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Article
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.uploads.$remove($state.go('articles.list'));
      }
    }
    
    var imagefiles = [];
function readImage() {
     
        
        if (this.files) {
           
        
            var img_tag = '';
            var a;
         for (var i = 0; i < this.files.length; i++) { 
             
            var FR = new FileReader();
            FR.onload = (function (i) {
                return function (e) {
                console.log(i);
                a = i+1
                img_tag = '<img class="user-photos" id="img_'+a+'" src="'+e.target.result+'"  width="200" height="200" />';
                $("div#img_list").append(img_tag);    
                
                }
             })(i);
            FR.readAsDataURL(this.files[i]);
         } // loop end
        }
    }
    //$("#fileInput").change(readImage);
  document.getElementById('fileInput').addEventListener('change', readImage, false);
    
    
    
    
    // Save Article
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.uploadsForm');
        return false;
      }
      
        console.log(vm.uploads);
      // TODO: move create/update logic to service
      if (vm.uploads._id) {
        vm.uploads.$update(successCallback, errorCallback);
      } else {
        vm.uploads.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('uploads.view', {
          imageId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
}());
