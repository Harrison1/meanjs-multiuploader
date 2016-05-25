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
 function readImage() {
     
        //if (this.files && this.files[0]) {
        if (this.files) {
            console.log(this.files.length);
            
         for (i = 0; i < this.files.length; i++) { 
            /*var FR = new FileReader();
            FR.onload = function (e) {
                //$('#img').show();
                //$('#img').attr("src", e.target.result);
                //$('#imageCode').val(e.target.result);
                //$("#dbImg").hide();
                //$scope.banner.imagefile = e.target.result;
            };
            FR.readAsDataURL(this.files[0]);*/
             console.log(this.files[i]);
         }    
            
        }
    }
    $("#fileInput").change(readImage);
    
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
