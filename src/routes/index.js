const router = require("express").Router();
const CityRepository = require("../repositories/city_repository");
const {
  query,
  param,
  validationResult,
  matchedData
} = require("express-validator");
const moment = require("moment");

// Root Route
router.get("/", (req, res) => {
  res.redirect("/cities");
});

// Get All Cities [OK]
router.get("/cities", (req, res) => {
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
    let result = [];
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const cityId = Number(req.params.id);
    const { start_date, end_date } = matchedData(req, {
      includeOptionals: false
    });

    // StartDate
    const startDate =
      start_date && moment(start_date, "YYYY-MM-DD").isValid()
        ? moment(req.query.start_date, "YYYY-MM-DD").unix()
        : false;

    // EndDate
    const endDate =
      end_date && moment(end_date, "YYYY-MM-DD").isValid()
        ? moment(req.query.end_date, "YYYY-MM-DD").unix()
        : false;

    if (startDate || endDate) {
      if (startDate && endDate && endDate < startDate) {
        return res
          .status(422)
          .json({ msg: "end_date must be ever bigger or equal start_date" });
      }

      result = CityRepository.getCityWithWeatherBetweenDates(
        cityId,
        start_date ? startDate : null,
        end_date ? endDate : null
      );
    } else {
      result = CityRepository.getCityWithWeather(cityId);
    }

    return res.json(result);
  }
);

// Get City with Weathers by lat and long
router.get(
  "/cities/localization",
  [
    query("lat")
      .not()
      .isEmpty(),
    query("long")
      .not()
      .isEmpty()
  ],
  (req, res) => {
    const { lat, long } = matchedData(req, {
      includeOptionals: false
    });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    return res.json(CityRepository.getCityByLatLong(lat, long));
  }
);

module.exports = router;
