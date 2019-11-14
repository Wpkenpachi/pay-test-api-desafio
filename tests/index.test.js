const request = require("supertest");
const {
  cities_get,
  weather_cities,
  first_city_weather,
  only_start_date,
  only_end_date,
  both_dates,
  start_bigger_than_end,
  cities_localization,
  localization_without_lat,
  localization_without_long,
  localization_without_lat_long
} = require("./expected_data/response_data.expected");
const app = require("../src/server");

describe("Api Test", () => {
  test("getAllCities", () => {
    return request(app)
      .get("/cities")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        expect(JSON.stringify(response.body)).toEqual(
          JSON.stringify(cities_get)
        );
      });
  });

  test("getAllCities that has Weather available", () => {
    return request(app)
      .get("/weather/cities")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        expect(JSON.stringify(response.body)).toEqual(
          JSON.stringify(weather_cities)
        );
      });
  });

  test("Get City with Weathers", () => {
    return request(app)
      .get("/cities/3992619/weather")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        expect(JSON.stringify(response.body)).toEqual(
          JSON.stringify(first_city_weather)
        );
      });
  });

  test("Get City with Weathers and startDate filter", () => {
    return request(app)
      .get("/cities/3992619/weather?start_date=2017-03-17")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        expect(JSON.stringify(response.body)).toEqual(
          JSON.stringify(only_start_date)
        );
      });
  });

  test("Get City with Weathers and endDate filter", () => {
    return request(app)
      .get("/cities/3992619/weather?end_date=2017-03-15")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        expect(JSON.stringify(response.body)).toEqual(
          JSON.stringify(only_end_date)
        );
      });
  });

  test("Get City with Weathers between dates", () => {
    return request(app)
      .get("/cities/3992619/weather?start_date=2017-03-17&end_date=2017-03-21")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        expect(JSON.stringify(response.body)).toEqual(
          JSON.stringify(both_dates)
        );
      });
  });

  test("Get City with Weathers between dates, with start bigger than end", () => {
    return request(app)
      .get("/cities/3992619/weather?start_date=2017-03-17&end_date=2017-03-15")
      .expect("Content-Type", /json/)
      .expect(422)
      .then(response => {
        expect(JSON.stringify(response.body)).toEqual(
          JSON.stringify(start_bigger_than_end)
        );
      });
  });

  test("Get City with Weathers by long and lat", () => {
    return request(app)
      .get("/cities/localization?long=-100.51667&lat=28.700001")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        expect(JSON.stringify(response.body)).toEqual(
          JSON.stringify(cities_localization)
        );
      });
  });

  test("Get City with Weathers by long and lat without long", () => {
    return request(app)
      .get("/cities/localization?lat=28.700001")
      .expect("Content-Type", /json/)
      .expect(422)
      .then(response => {
        expect(JSON.stringify(response.body)).toEqual(
          JSON.stringify(localization_without_long)
        );
      });
  });

  test("Get City with Weathers by long and lat without lat", () => {
    return request(app)
      .get("/cities/localization?long=28.700001")
      .expect("Content-Type", /json/)
      .expect(422)
      .then(response => {
        expect(JSON.stringify(response.body)).toEqual(
          JSON.stringify(localization_without_lat)
        );
      });
  });

  test("Get City with Weathers by long and lat without long and lat", () => {
    return request(app)
      .get("/cities/localization")
      .expect("Content-Type", /json/)
      .expect(422)
      .then(response => {
        expect(JSON.stringify(response.body)).toEqual(
          JSON.stringify(localization_without_lat_long)
        );
      });
  });
});
