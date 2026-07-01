const express = require("express");
const router = express.Router();

const {
  createAccommodation,
  getAccommodations,
  getAccommodationById,
  deleteAccommodation,
} = require("../controllers/accommodationController");

// GET all
router.get("/", getAccommodations);

// GET one
router.get("/:id", getAccommodationById);

// POST
router.post("/", createAccommodation);

// DELETE
router.delete("/:id", deleteAccommodation);

module.exports = router;