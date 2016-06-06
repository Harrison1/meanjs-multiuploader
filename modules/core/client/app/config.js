'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function () {
  // Init module configuration options
  var applicationModuleName = 'mean';
  //var applicationModuleVendorDependencies = ['oc.lazyLoad','ui.router','ui.bootstrap','angular-loading-bar','ngResource', 'ngAnimate', 'ngMessages','ui.utils', 'angularFileUpload'];
  var applicationModuleVendorDependencies = ['ngResource','ngStorage', 'ngAnimate', 'ngMessages', 'ui.router', 'ui.bootstrap', 'ui.utils','oc.lazyLoad', /*'angular-loading-bar', 'ckeditor'*/,'toastr', 'ngFileUpload' /*'anim-in-out','colorpicker.module',*/];
  // Add a new vertical module
  var registerModule = function (moduleName, dependencies) {
    // Create angular module
    angular.module(moduleName, dependencies || []);

    // Add the module to the AngularJS configuration file
    angular.module(applicationModuleName).requires.push(moduleName);
  };

  return {
    applicationModuleName: applicationModuleName,
    applicationModuleVendorDependencies: applicationModuleVendorDependencies,
    registerModule: registerModule
  };
})();
