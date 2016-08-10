/*eslint-disable no-var */
var express = require('express');
var path = require('path');
var email = require('./api/email/email.express');
var geocode = require('./api/geocode/geocode.express');
var server = require('./server');
var compression = require('compression');

server({
    port: process.env.PORT || 9682,
    apis : [email, geocode],
    uses: [express.static('dist'), compression()],
    default: function(request, response) {
        response.sendFile(path.join(__dirname, './../dist/index.html'));
    }
});