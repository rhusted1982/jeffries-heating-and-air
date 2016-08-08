/*eslint-disable no-var */

module.exports = (app) => {
    app.post('/contact', function(request, response) {
        var mailgun = require('mailgun-js')( {apiKey: process.env.MailgunKey, domain: process.env.MailgunDomain} );
        var data = {
            from: process.env.MailgunTestEmail,
            to: process.env.MailgunEmail,
            subject: 'Test Heroku',
            text: 'Testing Testing 123'
        };
        mailgun.messages().send(data);
        response.sendStatus(200);
    });
};