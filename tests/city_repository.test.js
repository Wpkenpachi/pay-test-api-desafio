const CityRepository = require("../src/repositories/city_repository");
const {
  getAll,
  getCitiesIfHasWeather,
  getCityWithWeather,
  getCityWithWeatherStartDate,
  getCityWithWeatherEndDate,
  getCityWithWeatherBetweenDates,
  getCityByLatLong
} = require("./expected_data/city_repository_data.expected");

describe("CityRepository", () => {
  it("getAll", () => {
    const data = JSON.stringify(CityRepository.getAll());
    expect(data).toBeTruthy();
    expect(data).toBe(getAll);
  });

  it("getCitiesIfHasWeather", () => {
    const data = JSON.stringify(CityRepository.getCitiesIfHasWeather());
    expect(data).toBeTruthy();
    expect(data).toBe(getCitiesIfHasWeather);
  });

  it("getCityWithWeather", () => {
    const data = JSON.stringify(CityRepository.getCityWithWeather(3992619));
    expect(data).toBeTruthy();
    expect(data).toBe(getCityWithWeather);
  });

  it("getCityWithWeatherBetweenDates only with start_date", () => {
    const cityId = 3992619;
    const start_date = 1489719600;
    const data = CityRepository.getCityWithWeatherBetweenDates(
      cityId,
      start_date,
      null
    );

    expect(data).toBeTruthy();
    expect(JSON.stringify(data.data)).toBe(
      JSON.stringify(getCityWithWeatherStartDate.data)
    );
    expect(data.weather.length).toEqual(
      getCityWithWeatherStartDate.weather.length
    );
  });

  it("getCityWithWeatherBetweenDates only with end_date", () => {
    const cityId = 3992619;
    const end_date = 1490065200;
    const data = CityRepository.getCityWithWeatherBetweenDates(
      cityId,
      null,
      end_date
    );

    expect(data).toBeTruthy();
    expect(JSON.stringify(data.data)).toBe(
      JSON.stringify(getCityWithWeatherEndDate.data)
    );
    expect(data.weather.length).toEqual(
      getCityWithWeatherEndDate.weather.length
    );
  });

  it("getCityWithWeatherBetweenDates with both dates", () => {
    const cityId = 3992619;
    const start_date = 1489719600;
    const end_date = 1490065200;
    const data = CityRepository.getCityWithWeatherBetweenDates(
      cityId,
      start_date,
      end_date
    );
    expect(data).toBeTruthy();
    expect(JSON.stringify(data.data)).toBe(
      JSON.stringify(getCityWithWeatherBetweenDates.data)
    );

    expect(data.weather.length).toEqual(
      getCityWithWeatherBetweenDates.weather.length
    );
  });

  it("getCityWithWeatherBetweenDates with end_date lower than start_date", () => {
    const cityId = 3992619;
    const start_date = 1489719600;
    const end_date = 1490065200;
    const data = CityRepository.getCityWithWeatherBetweenDates(
      cityId,
      end_date,
      start_date
    );
    expect(data.weather).toBe(false);
  });

  it("getCityByLatLong", () => {
    const long = -100.51667;
    const lat = 28.700001;
    const data = CityRepository.getCityByLatLong(lat, long);
    expect(JSON.stringify(data.data)).toEqual(
      JSON.stringify(getCityByLatLong.data)
    );
    expect(data.weather).toEqual(getCityByLatLong.weather);
  });

  it("getCityByLatLong without long", () => {
    const long = null;
    const lat = 28.700001;
    const data = CityRepository.getCityByLatLong(lat, long);
    expect(data).toEqual(false);
  });

  it("getCityByLatLong without lat", () => {
    const long = 28.700001;
    const lat = null;
    const data = CityRepository.getCityByLatLong(lat, long);
    expect(data).toEqual(false);
  });

  it("getCityByLatLong without lat and long", () => {
    const long = "";
    const lat = "";
    const data = CityRepository.getCityByLatLong(lat, long);
    expect(data).toEqual(false);
  });
});
