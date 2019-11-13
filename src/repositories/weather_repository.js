const _ = require("lodash");
const moment = require("moment");
const { Weather: Weathers } = require("../database/load_json_database");

const WeatherRepository = {
  getCityWeather: cityId => {
    if (!cityId) return false;
    const foundWeather = _.find(Weathers, { cityId });
    return foundWeather ? foundWeather.data : [];
  },

  getAvailableCityIds: () => {
    return _.map(Weathers, "cityId");
  },

  getCityWeatherBetweenDates: (cityId, startDate, endDate) => {
    if (!cityId) return false;

    const foundWeather = _.find(Weathers, { cityId });
    let weatherList = [];

    if (startDate && endDate && endDate < startDate) return false;

    if (foundWeather) {
      weatherList = _.filter(foundWeather.data, weather => {
        const weather_timestamp = moment(
          moment.unix(weather.dt).format("DD/MM/YYYY"),
          "DD/MM/YYYY"
        ).unix();

        if (!endDate && startDate) {
          if (weather_timestamp >= startDate) {
            return weather;
          }
        } else if (endDate && !startDate) {
          if (weather_timestamp <= endDate) {
            return weather;
          }
        } else if (
          weather_timestamp >= startDate &&
          weather_timestamp <= endDate
        ) {
          return weather;
        }
      });
    }
    return weatherList;
  }
};

module.exports = WeatherRepository;
