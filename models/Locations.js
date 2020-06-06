const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationsSchema = new Schema({
  name: String,
  brewery: { type: Schema.Types.ObjectId, ref: "Brewery" },
  venues: [
    {
      type: Schema.Types.ObjectId,
      ref: "Locations",
    },
  ],
  bar: { type: Boolean, default: false },
  brauhaus: { type: Boolean, default: false },
  bottleShop: { type: Boolean, default: false },
});

const Locations = model("Locations", LocationsSchema);

module.exports = Locations;
