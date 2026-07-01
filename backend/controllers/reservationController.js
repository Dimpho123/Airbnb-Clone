const Reservation = require("../models/Reservation");

// Create Reservation
const createReservation = async (req, res) => {

  try {

    const reservation =
      await Reservation.create(req.body);

    res.status(201).json(reservation);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// Reservations for Host
const getReservationsByHost = async (req, res) => {

  try {

    const reservations =
      await Reservation.find({
        host: req.user.id
      });

    res.json(reservations);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// Reservations for User
const getReservationsByUser = async (req, res) => {

  try {

    const reservations =
      await Reservation.find({
        user: req.user.id
      });

    res.json(reservations);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// Delete Reservation
const deleteReservation = async (req, res) => {

  try {

    const reservation =
      await Reservation.findById(req.params.id);

    if (!reservation) {

      return res.status(404).json({
        message: "Reservation not found"
      });

    }

    await reservation.deleteOne();

    res.json({
      message: "Reservation deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

module.exports = {
  createReservation,
  getReservationsByHost,
  getReservationsByUser,
  deleteReservation
};