'use strict';

/**
 * Module dependencies
 */
var articlesPolicy = require('../policies/uploads.server.policy'),
  uploads = require('../controllers/uploads.server.controller');

module.exports = function (app) {
  // Uploads collection routes
  app.route('/api/uploads').all(articlesPolicy.isAllowed)
    .get(uploads.list)
    .post(uploads.create);

  // Single uploads routes
  app.route('/api/uploads/:imageId').all(articlesPolicy.isAllowed)
    .get(uploads.read)
    .put(uploads.update)
    .delete(uploads.delete);

  // Finish by binding the image middleware
  app.param('imageId', uploads.imagesByID);
};
