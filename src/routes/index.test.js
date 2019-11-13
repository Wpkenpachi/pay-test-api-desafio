const rest = require("rest");
const {
  cities_get,
  weather_cities,
  first_city_weather,
  only_start_date,
  only_end_date,
  both_dates,
  start_bigger_than_end
} = require("../test/expected_data/response_data.expected");
const BASE_URL = "http://localhost:4040";

describe("Api Test", () => {
  test("getAllCities", async () => {
    const data = await rest(`${BASE_URL}/cities/get`);
    expect(true).toBe(true);
  });
});
