const express = require("express");
const router = express.Router();

const {
  createAccommodation,
  getAccommodations,
  getAccommodationById,
  deleteAccommodation,
} = require("../controllers/accommodationController");


router.get("/", getAccommodations);


router.get("/:id", getAccommodationById);


router.post("/", createAccommodation);


router.delete("/:id", deleteAccommodation);

module.exports = router;