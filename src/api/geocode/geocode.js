/*eslint-disable no-var */

var request = require('request');
var data = require('./geocode.data');

module.exports = (app) => {
    app.post('/geocode', function(req, res) {
        request(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${req.query.latitude},${req.query.longitude}&result_type=administrative_area_level_2&key=${process.env.GoogleMapsKey}`,
            function(error, response, body) {
                try {
                    var json = JSON.parse(body);
                    var result = `${json.results[0].address_components[0].long_name},${json.results[0].address_components[1].short_name}`;
                    var found = data.counties.indexOf(result) !== -1;
                    res.send(found);
                } catch(exception) {
                    res.sendStatus(500);
                }
            });
    });
};