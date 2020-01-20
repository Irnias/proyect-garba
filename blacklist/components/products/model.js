const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({ 
  id: { type: String, required: true }, 
  description: { type: String, required: true },
  image_url: { type: String, required: true },
  price: { type: Number, required: true },
  list_price: { type: Number, required: true },
  discount: { type: Number, required: true },
  enabled: { type: String, required: true},
});

const model = mongoose.model('items', mySchema);

module.exports = model; 