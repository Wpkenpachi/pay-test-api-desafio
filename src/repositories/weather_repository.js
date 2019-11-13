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
  }
};

module.exports = WeatherRepository;
