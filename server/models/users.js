const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  mobileNumber: String,
  phoneNumber: String,
  gender: String,
  age: Number,
  address: String,
  alergies: String,
  SpecialConsiderations: {
    handStrength: String,
    circulation: String,
    Biopolimers: String,
    other: String,
  },
  measurements: [
    {
      date: Date,
      siza: Number,
      tiro: Number,
      bustSize: Number,
      contourLowerBust: Number,
      contourWaist: Number,
      contourHips: Number,
      contourUpperThigh: Number,
      contourMidThigh: Number,
      contourAboveKnee: Number,
      contourBelowKnee: Number,
      contourCalf: Number,
      lengthMidThigh: Number,
      lengthAboveKnee: Number,
      lengthBelowKnee: Number,
      lengthCalf: Number,
    },
  ],
  orders: [
    {
      model: String,
      quantity: Number,
      status: String,
      payed: String,
    },
  ],
});

module.exports = mongoose.model('Users', usersSchema);
