'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        // bower:css
        'public/lib/bootstrap/dist/css/bootstrap.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.css',
        'public/lib/angular-toastr/angular-toastr.min.css',
        'public/lib/bootstrap-slider/bootstrap-slider.css',
        'public/lib/font-awesome/css/font-awesome.min.css',     
        'public/lib/angular-ui-router-anim-in-out/css/anim-in-out.css',
        // endbower
      ],
      js: [
        // bower:js
        'public/lib/jquery/dist/jquery.min.js',
        'public/lib/bootstrap/dist/js/bootstrap.min.js',
        'public/lib/angular/angular.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/angular-ui-utils/ui-utils.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/angular-file-upload/angular-file-upload.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
        'public/lib/ngstorage/ngStorage.min.js',
        'public/lib/angular-toastr/angular-toastr.tpls.min.js',
        'public/lib/jquery-easing/jquery.easing.min.js',
        'public/lib/bootstrap-slider/bootstrap-slider.js',
        'public/lib/jquery-number-format/jquery.number.js',
        'public/lib/angular-input-masks/angular-input-masks-standalone.js',
        'public/lib/angular-ui-router-anim-in-out/anim-in-out.js',
        'public/lib/oclazyload/dist/ocLazyLoad.min.js',
        'public/lib/angular-loading-bar/build/loading-bar.min.js',
        'https://angular-file-upload.appspot.com/js/ng-file-upload-shim.js',
        'https://angular-file-upload.appspot.com/js/ng-file-upload.js',
        'public/lib/ckeditor/ckeditor.js',
        /*'public/lib/d3/d3.v3.js',
        'public/lib/nvd3/nv.d3.js',*/
        'public/lib/google-charts/loader.js',
        'public/lib/moment/moment.min.js',
        //'public/lib/highcharts/highcharts.js',
        // endbower
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/css/*.css'
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ],
    img: [
      'modules/**/*/img/**/*.jpg',
      'modules/**/*/img/**/*.png',
      'modules/**/*/img/**/*.gif',
      'modules/**/*/img/**/*.svg'
    ],
    views: ['modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: ['gruntfile.js'],
    gulpConfig: ['gulpfile.js'],
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    sockets: 'modules/*/server/sockets/**/*.js',
    config: ['modules/*/server/config/*.js'],
    policies: 'modules/*/server/policies/*.js',
    views: ['modules/*/server/views/*.html']
  }
};
