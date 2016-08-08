/*eslint-disable no-var */

var request = require('request');
var counties = require('./../data/counties');

module.exports = (app) => {
    app.post('/geocode', function(req, res) {
        request(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${req.query.latitude},${req.query.longitude}&result_type=administrative_area_level_2&key=${process.env.GoogleMapsKey}`,
            function(error, response, body) {
                var data = JSON.parse(body);
                var result = `${data.results[0].address_components[0].long_name},${data.results[0].address_components[1].short_name}`;
                var found = counties.indexOf(result) !== -1;
                res.sendStatus(200, found);
            });
    });
};