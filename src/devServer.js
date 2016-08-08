import webpack from 'webpack';
import webpackDevMiddleWare from 'webpack-dev-middleware';
import path from 'path';
import config from './../webpack.config.dev';
const email = require('./api/email');
const geocode = require('./api/geocode');
const server = require('./server');

const compiler = webpack(config);
const middleware = webpackDevMiddleWare(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
});

server({
    port: 9682,
    apis : [email, geocode],
    uses: [middleware],
    default: function(request, response) {
        response.sendFile(path.join(__dirname, './index.html'));
    }
});





