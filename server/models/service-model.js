const {Schema,model} = require('mongoose');

// Define the schema for the Service model
const serviceSchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});


// Create and export the Service model
const Service  = new model("Service" , serviceSchema)

module.exports = Service;
