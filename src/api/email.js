import mail from 'mailgun-js';

export default (app) => {
    app.post('/contact', function(request, response) {
        response.sendStatus(200);
    });
};