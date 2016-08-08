module.exports = (app) => {
    app.post('/geocode/:latitude/:longitude', function(request, response) {
        response.sendStatus(200);
    });
};