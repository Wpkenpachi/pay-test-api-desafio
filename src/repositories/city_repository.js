const _ = require("lodash");
const { City: Cities } = require("../database/load_json_database");
const WeatherRepository = require("./weather_repository");

const CityRepository = {
  getAll: () => {
    return Cities;
  },

  getCitiesIfHasWeather: () => {
    const cityIds = WeatherRepository.getAvailableCityIds();
    const cities = _.filter(Cities, city => {
      if (cityIds.includes(city.id)) {
        return city;
      }
    });

    return cities.map(city => {
      return {
        data: cities,
        weather: WeatherRepository.getCityWeather(city.id)
      };
    });
  },

  getCityWithWeather: cityId => {
    return {
      data: _.find(Cities, { id: cityId }) || [],
      weather: WeatherRepository.getCityWeather(cityId)
    };
  },

  getCityWithWeatherBetweenDates: (cityId, initDate, endDate) => {
    const data = {
      data: _.find(Cities, { id: cityId }),
      weather: WeatherRepository.getCityWeatherBetweenDates(
        cityId,
        initDate,
        endDate
      )
    };
    return data;
  }
};

module.exports = CityRepository;
