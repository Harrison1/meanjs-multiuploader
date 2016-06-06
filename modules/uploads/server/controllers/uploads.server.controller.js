'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Album = mongoose.model('Album'),
  Photos = mongoose.model('Photos'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));
var fs = require("fs");
/**
 * Create an UploadImages
 */
exports.create = function (req, res) {
    var user = req.user;
    
    var base64Image = req.body.filecode;
    var photoInfo = uploadCode(base64Image,user._id);
    
  var photos = new Photos();
  photos.user = user;
  photos.photoname = photoInfo.imagename;
  photos.photopath = photoInfo.imagepath;

  photos.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(photos);
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
  Photos.find().exec(function (err, photos) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(photos);
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

    // Image ecode code make decode in this function
    function decodeBase64Image(dataString) {
      var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};

      if (matches.length !== 3) {
        return new Error('Invalid input string');
      }

      response.type = matches[1];
      response.data = new Buffer(matches[2], 'base64');

      return response;
    }

        function uploadCode(base64ImageCode,userId){
            var imagename;
            var imageBuffer = decodeBase64Image(base64ImageCode);
            var myarr = imageBuffer.type.split("/");
            //Then read the values from the array where 0 is the first
            var imageType = myarr[1];
            var imageLoc;

                imageLoc = 'public/uploads/usersAlbums/';
                imagename = 'vivid_'+userId+ '_' +Math.random()+ '.'+imageType;
                var orgImageLoc = imageLoc+imagename;
                    /**********Upload image image code here below*************/
                    fs.writeFile(orgImageLoc, imageBuffer.data, function(err) {
                      if (err) {
                        return res.status(400).send( {message: getErrorMessage(err)})   
                      }
                    });
         var imageData = {imagepath:imageLoc,imagename:imagename};
        return imageData;
        }