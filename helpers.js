// Helpers

//Globsl Dependencies 
var Twitter= require('twitter');

var Helpers= {};

Helpers.getTwitterClient = function() {
    //TODO: This is super insecure.
    //Move to environment variables.
        var client = new Twitter({
        consumer_key: 'eqtFyN5kUbRBIuwFSEJJ8H4nk',
         consumer_secret: 'jxscIoVA0nTp5qjINXxXheoEnCHR2dWWONcFlbZQLeiXhCQnqB',
         access_token_key: '736631655054594048-LmzTsrAwfRgMpb8wMat7XRHv1nXmyJR',
         access_token_secret:'hQJCAUj7Q58WceTIZZQWQWunDdbwUrRRqovrmMEQTU13O'
});

return client;
};
module.exports = Helpers;