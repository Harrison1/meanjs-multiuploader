'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
  UploadImages = mongoose.model('UploadImages'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create an UploadImages
 */
exports.create = function (req, res) {
  var uploads = new UploadImages(req.body);
  uploads.user = req.user;

  uploads.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(uploads);
    }
  });
};

/**
 * Show the current UploadImages
 */
exports.read = function (req, res) {
  // convert mongoose document to JSON
  var article = req.article ? req.article.toJSON() : {};

  // Add a custom field to the Article, for determining if the current User is the "owner".
  // NOTE: This field is NOT persisted to the database, since it doesn't exist in the Article model.
  article.isCurrentUserOwner = !!(req.user && article.user && article.user._id.toString() === req.user._id.toString());

  res.json(article);
};

/**
 * Update an UploadImages
 */
exports.update = function (req, res) {
  var UploadImages = req.article;

  UploadImages.title = req.body.title;
  UploadImages.content = req.body.content;

  UploadImages.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(UploadImages);
    }
  });
};

/**
 * Delete an UploadImages
 */
exports.delete = function (req, res) {
  var UploadImages = req.article;

  UploadImages.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(UploadImages);
    }
  });
};

/**
 * List of UploadImages
 */
exports.list = function (req, res) {
  UploadImages.find().sort('-created').populate('user', 'displayName').exec(function (err, articles) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(articles);
    }
  });
};

/**
 * UploadImages middleware
 */
exports.imagesByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Images is invalid'
    });
  }

  UploadImages.findById(id).populate('user', 'displayName').exec(function (err, images) {
    if (err) {
      return next(err);
    } else if (!images) {
      return res.status(404).send({
        message: 'No article with that identifier has been found'
      });
    }
    req.images = images;
    next();
  });
};
