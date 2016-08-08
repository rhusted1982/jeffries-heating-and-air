/*eslint-disable no-var */

module.exports = (app) => {
    var parser = require('body-parser').json();

    app.post('/contact', parser, function(req, res) {
        var mailgun = require('mailgun-js')( {apiKey: process.env.MailgunKey, domain: process.env.MailgunDomain} );
        var data = {
            from: process.env.MailgunEmail,
            to: process.env.MailgunEmail,
            subject: `Contact Request - ${req.body.name}`,
            text: `
            Name is ${req.body.name}.
            Reason is ${req.body.reason}.
            Email is ${req.body.email}.
            Phone Number is ${req.body.phoneNumber}.
            `
       };
        mailgun.messages().send(data);
        res.sendStatus(200);
    });
};