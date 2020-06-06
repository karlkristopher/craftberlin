const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BrewerySchema = new Schema({
  name: String,
  venues: [
    {
      type: Schema.Types.ObjectId,
      ref: "Locations",
    },
  ],

  logoImgName: String,
  logoImgPath: String,
  Description: String,
  Website: String,
});

const Brewery = model("Brewery", BrewerySchema);

module.exports = Brewery;
