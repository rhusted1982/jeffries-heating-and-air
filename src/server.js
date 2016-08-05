const express = require('express');
const open = require('open');

/*eslint-disable no-console */

const Server = (args) => {
    const app = express();
    args.uses.forEach(use => app.use(use));
    args.apis.forEach(api => api(app));
    app.listen(args.port, function(error) {
        if(error) {
            console.log(error);
        } else {
            open(`http://localhost:${args.port}`);
        }
    });
    app.get('*', args.default);
};

module.exports = Server;