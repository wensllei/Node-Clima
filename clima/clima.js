const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d18ac45754d914e9c8e352ebebcba700&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}