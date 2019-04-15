const mongoose = require('mongoose');

//Defining the Wish model Schema
const wishSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

const Wish = mongoose.model('Wish', wishSchema);
module.exports = Wish;



