const mongoose = require("mongoose");

const govSchema = new mongoose.Schema({
  commodity:  {
    type: String,
    default:"Onion"
  },
  min_price:  {
    type: Number,
    required: true,
  },
  max_price: {
    type: Number,
  
  },
  modal_price : {
    type: Number,

  },
 
  
});

const GovData = mongoose.model("GovData", govSchema);
module.exports = GovData;