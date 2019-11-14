const WeatherRepository = require("../src/repositories/weather_repository");
const {
  getAvailableIds,
  firstWeatherObj,
  startDateWeather,
  endDateWeather,
  bothDatesWeather
} = require("../tests/expected_data/weather_repository,expected");

describe("Weather Repository", () => {
  it("getAvailableIds", () => {
    const ids = WeatherRepository.getAvailableCityIds();
    expect(ids).toEqual(expect.arrayContaining(getAvailableIds));
  });

  it("firstWeatherObj", () => {
    const weather = WeatherRepository.getCityWeather(3992619);
    expect(weather).toEqual(firstWeatherObj);
  });

  it("firstWeatherObj without cityId", () => {
    const weather = WeatherRepository.getCityWeather(null);
    expect(weather).toEqual(false);
  });

  it("startDateWeather", () => {
    const arr = WeatherRepository.getCityWeatherBetweenDates(
      3992619,
      1489719600,
      null
    );
    expect(arr).toEqual(expect.arrayContaining(startDateWeather));
  });

  it("endDateWeather", () => {
    const arr = WeatherRepository.getCityWeatherBetweenDates(
      3992619,
      null,
      1490065200
    );
    expect(arr).toEqual(expect.arrayContaining(endDateWeather));
  });

  it("BothDatesWeather", () => {
    const arr = WeatherRepository.getCityWeatherBetweenDates(
      3992619,
      1489719600,
      1490065200
    );
    expect(arr).toEqual(expect.arrayContaining(bothDatesWeather));
  });
});
