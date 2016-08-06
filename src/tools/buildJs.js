import webpack from 'webpack';
import config from './../../webpack.config.dev';

/*eslint-disable no-console */

process.env.NODE_ENV = 'production';

webpack(config).run((error, stats) => {
    if (error) {
        console.log(error);
        return 1;
    }
    const jsonStats = stats.toJson();
    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error));
    }
    return 0;
});