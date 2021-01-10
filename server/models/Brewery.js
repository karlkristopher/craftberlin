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
  description: String,
  website: String,
});

const Brewery = mongoose.model("Brewery", BrewerySchema);

module.exports = Brewery;
