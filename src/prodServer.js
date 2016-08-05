const path = require('path');
const config = require('../webpack.config.prod');
const email = require('./api/email');
const server = require('./server');
const compression = require('compression');

server({
    port: process.env.PORT || 9682,
    apis : [email],
    uses: [compression],
    default: function(request, response) {
        response.sendFile(path.join(__dirname, '../dist/index.html'));
    }
});