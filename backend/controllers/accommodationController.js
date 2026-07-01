const Accommodation = require("../models/Accommodation");


const createAccommodation = async (req, res) => {
  try {
    const accommodation = await Accommodation.create(req.body);
    res.status(201).json(accommodation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getAccommodations = async (req, res) => {
  try {
    const accommodations = await Accommodation.find();
    res.json(accommodations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getAccommodationById = async (req, res) => {
  try {
    const accommodation = await Accommodation.findById(req.params.id);

    if (!accommodation) {
      return res.status(404).json({
        message: "Accommodation not found"
      });
    }

    res.json(accommodation);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


const deleteAccommodation = async (req, res) => {
  try {
    await Accommodation.findByIdAndDelete(req.params.id);

    res.json({
      message: "Accommodation deleted"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


module.exports = {
  createAccommodation,
  getAccommodations,
  getAccommodationById,
  deleteAccommodation
};