const settings = require('./../data/email');

module.exports = (app) => {
    app.post('/contact', function(request, response) {
        const mailgun = require('mailgun-js')( {apiKey: settings.key, domain: settings.domain} );
        const data = {
            from: 'amylaseter@att.net',
            to: settings.address,
            subject: 'Test',
            text: 'Testing Testing 123'
        };
        mailgun.messages().send(data);
        response.sendStatus(200);
    });
};