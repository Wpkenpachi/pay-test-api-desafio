const router = require("express").Router();

const moment = require("moment");

// Get All Cities
router.get("/cities/get", (req, res) => {});

// Get Cities if it has Weathers
router.get("/weather/cities", (req, res) => {});

// Get City with Weathers
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
  (req, res) => {}
);

module.exports = router;
