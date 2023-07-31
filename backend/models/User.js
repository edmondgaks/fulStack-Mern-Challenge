const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  dob: { type: Date, required: true },
  city: { type: String, required: true },
  zip: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  interests: [String],
  profilePicture: { type: String },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);