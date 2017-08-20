var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=be711e3f18e24934d5ed09888aa0dcbc&units=metric';

//be711e3f18e24934d5ed09888aa0dcbc

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        //when using back ticks (`) we caninject variables inside string using $
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        return axios.get(requestUrl).then(function (res) {
            if (!(res.message === undefined) || res === undefined || res.data === undefined) {
                throw new Error('City not found!');
            }
            else if (!res.data.cod) {
                throw new Error('City not found!');
            } else {
                return res.data.list[0].main.temp;
            }
            }, function (res) {
            throw new Error('City not found!');
            });
    }
}