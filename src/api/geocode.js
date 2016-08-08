module.exports = (app) => {
    app.post('/geocode', function(request, response) {
        response.sendStatus(200);
    });
};