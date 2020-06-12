const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationsSchema = new Schema({
  name: String,
  brewery: { type: Schema.Types.ObjectId, ref: "Brewery" },
  bar: { type: Boolean, default: false },
  tapRoom: { type: Boolean, default: false },
  bottleShop: { type: Boolean, default: false },
  website: String,
  address: String,
  logo: String,
  addedBy: String,
  lastEdit: String,
});

const Locations = mongoose.model("Locations", LocationsSchema);

module.exports = Locations;
