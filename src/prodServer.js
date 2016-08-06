/*eslint-disable no-var */
var express = require('express');
var path = require('path');
var email = require('./api/email');
var Server = require('./server');
var compression = require('compression');

Server({
    port: process.env.PORT || 1982,
    apis : [email],
    uses: [express.static('dist'), compression()],
    default: function(request, response) {
        response.sendFile(path.join(__dirname, './../dist/index.html'));
    }
});