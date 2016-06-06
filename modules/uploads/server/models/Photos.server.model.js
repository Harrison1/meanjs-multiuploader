'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Photos Schema
 */
var PhotosSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  photoname: {
    type: String,
    default: '',
  },
  photopath: {
    type: String,
    default: '',
  },
  /*album: {
    type: Schema.ObjectId,
    ref: 'Album'
  },*/
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Photos', PhotosSchema);
