const rest = require("rest");
const {
  cities_get,
  weather_cities,
  first_city_weather,
  only_start_date,
  only_end_date,
  both_dates,
  start_bigger_than_end,
  cities_localization
} = require("../test/expected_data/response_data.expected");
const BASE_URL = "http://localhost:4040";

const util = require("util");
const exec = util.promisify(require("child_process").exec);

describe("Api Test", () => {
  beforeAll(async () => {
    await exec("npm start &");
  });

  test("getAllCities", async () => {
    const { entity, status } = await rest(`${BASE_URL}/cities`);
    expect(status.code).toBe(200);
    expect(entity).toBe(JSON.stringify(cities_get));
  });

  test("getAllCities that has Weather available", async () => {
    const { entity, status } = await rest(`${BASE_URL}/weather/cities`);
    expect(status.code).toBe(200);
    expect(entity).toBe(JSON.stringify(weather_cities));
  });

  test("Get City with Weathers", async () => {
    const { entity, status } = await rest(`${BASE_URL}/cities/3992619/weather`);
    expect(status.code).toBe(200);
    expect(entity).toBe(JSON.stringify(first_city_weather));
  });

  test("Get City with Weathers and startDate filter", async () => {
    const { entity, status } = await rest(
      `${BASE_URL}/cities/3992619/weather?start_date=2017-03-17`
    );
    expect(status.code).toBe(200);
    expect(entity).toBe(JSON.stringify(only_start_date));
  });

  test("Get City with Weathers and endDate filter", async () => {
    const { entity, status } = await rest(
      `${BASE_URL}/cities/3992619/weather?end_date=2017-03-15`
    );
    expect(status.code).toBe(200);
    expect(entity).toBe(JSON.stringify(only_end_date));
  });

  test("Get City with Weathers between dates", async () => {
    const { entity, status } = await rest(
      `${BASE_URL}/cities/3992619/weather?start_date=2017-03-17&end_date=2017-03-21`
    );
    expect(status.code).toBe(200);
    expect(entity).toBe(JSON.stringify(both_dates));
  });

  test("Get City with Weathers between dates, with start bigger than end", async () => {
    const { entity, status } = await rest(
      `${BASE_URL}/cities/3992619/weather?start_date=2017-03-17&end_date=2017-03-15`
    );
    expect(status.code).toBe(422);
    expect(entity).toBe(JSON.stringify(start_bigger_than_end));
  });

  test("Get City with Weathers by long and lat", async () => {
    const { entity, status } = await rest(
      `${BASE_URL}/cities/localization?long=-100.51667&lat=28.700001`
    );
    expect(status.code).toBe(200);
    expect(entity).toBe(JSON.stringify(cities_localization));
  });
});
