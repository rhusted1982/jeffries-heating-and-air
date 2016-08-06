import webpack from 'webpack';
import config from './../../webpack.config.prod';

process.env.NODE_ENV = 'production';

webpack(config).run(() => {});