const express = require("express");
const router = express.Router();

const {
  createReservation,
  getReservationsByHost,
  getReservationsByUser,
  deleteReservation,
} = require("../controllers/reservationController");

router.post("/", createReservation);
router.get("/host", getReservationsByHost);
router.get("/user", getReservationsByUser);
router.delete("/:id", deleteReservation);

module.exports = router;