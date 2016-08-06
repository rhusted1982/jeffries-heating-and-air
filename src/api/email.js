/*eslint-disable no-var */

var settings = require('./../data/email');

module.exports = (app) => {
    app.post('/contact', function(request, response) {
        var mailgun = require('mailgun-js')( {apiKey: settings.key, domain: settings.domain} );
        var data = {
            from: 'amylaseter@att.net',
            to: settings.address,
            subject: 'Test',
            text: 'Testing Testing 123'
        };
        mailgun.messages().send(data);
        response.sendStatus(200);
    });
};