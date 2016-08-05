const webpack = require('webpack');
const path = require('path');
const email = require('./api/email');
const Server = require('./server');
const config = require('./../webpack.config.dev');

const compiler = webpack(config);
const middleware = require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
});

Server({
    port: 9682,
    apis : [email],
    uses: [middleware],
    default: function(request, response) {
        response.sendFile(path.join(__dirname, './index.html'));
    }
});





