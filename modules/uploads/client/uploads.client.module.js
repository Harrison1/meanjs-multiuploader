(function (app) {
  'use strict';

  app.registerModule('uploads', ['core']);// The core module is required for special route handling; see /core/client/config/core.client.routes
  app.registerModule('uploads.services');
  app.registerModule('uploads.routes', ['ui.router', 'core.routes', 'uploads.services']);
}(ApplicationConfiguration));
