const mongoose = require('mongoose');

const SpecialConsiderationsSchema = new mongoose.Schema({
  handStrength: String,
  circulation: String,
  Biopolimers: String,
  other: String
});

const measurementsSchema = new mongoose.Schema({
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
  lengthCalf: Number
});

const ordersSchema = new mongoose.Schema({
  date: Date,
  model: String,
  quantity: Number,
  status: String,
  payed: String
});

const usersSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobileNumber: String,
  phoneNumber: String,
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  address: String,
  alergies: String,
  SpecialConsiderations: SpecialConsiderationsSchema,
  measurements: [measurementsSchema],
  orders: [ordersSchema]
});

module.exports = mongoose.model('Users', usersSchema);
