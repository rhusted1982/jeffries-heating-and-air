import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import config from '../webpack.config.dev';
import email from './api/email';

/*eslint-disable no-console */

const port = process.env.port || 9682;
const app = express();
const compiler = webpack(config);

email(app);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('*', function(request, response) {
    response.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, function(error) {
    if (error) {
        console.log(error);
    } else {
        open(`http://localhost:${port}`);
    }
});