const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2bb940bd7737699e196d644da990f500/' +
         latitude + ',' + longitude + '?units=si'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            const degree = response.body.currently.temperature
            const precipProb = response.body.currently.precipProbability
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + degree + ' degrees out. There is a ' + precipProb + ' chance of rain.')
        }
    })
}



module.exports = forecast
