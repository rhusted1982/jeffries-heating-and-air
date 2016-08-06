/*eslint-disable no-var */

var path = require('path');
var email = require('./api/email');
var server = require('./server');
var compression = require('compression');

server({
    port: process.env.PORT || 1987,
    apis : [email],
    uses: [compression],
    default: function(request, response) {
        response.sendFile(path.join(__dirname, '../dist/index.html'));
    }
});