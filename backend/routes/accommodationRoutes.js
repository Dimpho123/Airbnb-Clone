const express = require("express");
const router = express.Router();

const {
  createAccommodation,
  getAccommodations,
  getAccommodationById,
  deleteAccommodation,
} = require("../controllers/accommodationController");

router.post("/", createAccommodation);
router.get("/", getAccommodations);
router.get("/:id", getAccommodationById);
router.delete("/:id", deleteAccommodation);

module.exports = router;