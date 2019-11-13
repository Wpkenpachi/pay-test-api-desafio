const fs = require("fs");

module.exports = {
  City: JSON.parse(fs.readFileSync(`${__dirname}/static/city_list.json`)),
  Weather: JSON.parse(fs.readFileSync(`${__dirname}/static/weather_list.json`))
};
