// Helpers

// Global dependencies
var Twitter = require('twitter');

var Helpers = {};

Helpers.getTwitterClient = function() {
  // Add your keys and access token credentials for your Twitter
  // developer application.
  // TODO: Move these values to environment variables. It's very
  // insecure to keep these values in your source code.
  var client = new Twitter({
    consumer_key: 'WBSBfp0kQJJz3R86rmRFmweez',
    consumer_secret: 'OUnCjlOgNj4F87IvOAGHhEGOprNg6ZRMPtVGD0gB8qaxz2JuPz',
    access_token_key: '736631655054594048-LmzTsrAwfRgMpb8wMat7XRHv1nXmyJR',
    access_token_secret: 'hQJCAUj7Q58WceTIZZQWQWunDdbwUrRRqovrmMEQTU13O'
  });

  return client;
};

module.exports = Helpers;
