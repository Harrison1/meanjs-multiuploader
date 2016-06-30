(function () {
  'use strict';

  angular
    .module('uploads')
    .controller('UploadsController', UploadsController);

  UploadsController.$inject = ['$scope', '$state', 'uploadService', '$window', 'Authentication','toastr', '$timeout'];

  function UploadsController($scope, $state, uploadService, $window, Authentication,toastr, $timeout) {
    var vm = this;

    vm.uploads = {};
    vm.authentication = Authentication;
    vm.error = null;
    vm.form = {};
    vm.save = save;
    $scope.imagefiles = [];

     vm.list = function (reload){

      uploadService.list().then(function(res){
        $scope.imagefiles = res;
        //console.log("listing");
      }, function(err){
        toastr.error(err)
      });
    }
    vm.list(false);
    
    
              
function readImage() {
        if (this.files) {
        toastr["info"]("Please wait...", "Uploading");
            var img_tag = '';
            var a;
            var fileData = {};
         for (var i = 0; i < this.files.length; i++) {
            var FR = new FileReader();
            FR.onload = (function (i) {
                return function (e) {
                a = i+1
                //img_tag = '<img class="user-photos" id="img_'+a+'" src="'+e.target.result+'"  width="200" height="200" />';
                //$("div#img_list").append(img_tag);    
                fileData = {filecode:e.target.result}
                 uploadimagesServiceCreate(fileData);
                }
             })(i);
            FR.readAsDataURL(this.files[i]);
            
            
            console.log(i);
            console.log(this.files.length);
         } // loop end
        
         //$timeout( function(){ vm.list(false); }, 5000);
         //$timeout( function(){ toastr.clear(); }, 5000);
          
        }
    }
    //$("#fileInput").change(readImage);
  document.getElementById('fileInput').addEventListener('change', readImage, false);
    
    // Save
    function save(isValid) {
      /*if (!isValid) {
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
      }*/
    }
    
    
    function uploadimagesServiceCreate(fileData) {
        
          uploadService.create(fileData).then(function (res){
                            //console.log(res);
                            //$scope.imagefiles.push(res);
                            $state.reload();
              //    toastr.success("Informations are saved succesfully");
                }, function (err){
                    
                    toastr.error(err.message?err.message:"Error on saving home page content ");
         });
    }
    
    
    
    
  }
}());
