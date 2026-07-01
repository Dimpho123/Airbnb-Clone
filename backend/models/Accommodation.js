const mongoose = require("mongoose");

const accommodationSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    city: {
      type: String,
      required: true
    },

    street: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    bed_num: {
      type: Number,
      required: true
    },

    bath_num: {
      type: Number,
      required: true
    },

    img: {
      type: String
    },

    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Accommodation",
  accommodationSchema
);