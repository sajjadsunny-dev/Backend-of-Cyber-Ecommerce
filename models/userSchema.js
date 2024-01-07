const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
   firstname: {
      type: String,
      required: true,
   },
   lastname: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
   telephone: {
      type: String,
      required: true,
   },
   address1: {
      type: String,
   },
   city: {
      type: String,
   },
   postcode: {
      type: String,
   },
   division: {
      type: String,
   },
   district: {
      type: String,
   },
   password: {
      type: String,
      required: true,
   },
})

module.exports = mongoose.model('UserList', userSchema)