/*eslint-disable no-var */
/*eslint-disable no-console */

var express = require('express');
var open = require('open');

module.exports = (args) => {
    var app = express();
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