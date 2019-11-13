const _ = require("lodash");
const { City: Cities } = require("../database/load_json_database");

const CityRepository = {
  getAll: () => {
    return Cities;
  }
};

module.exports = CityRepository;
