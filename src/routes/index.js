const router = require("express").Router();
const CityRepository = require("../repositories/city_repository");
const {
  query,
  param,
  validationResult,
  matchedData
} = require("express-validator");
const moment = require("moment");

// Get All Cities [OK]
router.get("/cities/get", (req, res) => {
  return res.json(CityRepository.getAll());
});

// Get Cities if it has Weathers [OK]
router.get("/weather/cities", (req, res) => {
  return res.json(CityRepository.getCitiesIfHasWeather());
});

// Get City with Weathers [OK]
router.get(
  "/cities/:id/weather",
  [
    param(["id"])
      .isInt()
      .not()
      .isEmpty(),
    query(["start_date", "end_date"])
      .optional({ checkFalsy: true })
      .escape()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    res.status(200).json({});
  }
);

module.exports = router;
