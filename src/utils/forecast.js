const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/dae857f6c11aadca249189f95216dcf0/' + latitude + ',' + longitude +"?lang=pt&units=si"

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' A temperatura atual é de ' + body.currently.temperature + ' C. Tem com probabilidade de ' + body.currently.precipProbability*100 + '% de chuva.')
        }
    })
}

module.exports = forecast