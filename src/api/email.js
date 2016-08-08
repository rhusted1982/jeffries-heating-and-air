/*eslint-disable no-var */

module.exports = (app) => {
    var parser = require('body-parser').json();

    app.post('/contact', parser, function(request, response) {
        var mailgun = require('mailgun-js')( {apiKey: process.env.MailgunKey, domain: process.env.MailgunDomain} );
        var data = {
            from: process.env.MailgunEmail,
            to: process.env.MailgunEmail,
            subject: `Contact Request - ${request.body.name}`,
            text: `
            Name is ${request.body.name}.
            Reason is ${request.body.reason}.
            Email is ${request.body.email}.
            Phone Number is ${request.body.phoneNumber}.
            `
       };
        mailgun.messages().send(data);
        response.sendStatus(200);
    });
};