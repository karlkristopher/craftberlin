const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationsSchema = new Schema({
  name: String, //name
  coordinates: [Number],
  brewery: { type: Schema.Types.ObjectId, ref: "Brewery" },
  bar: { type: Boolean, default: false },
  tapRoom: { type: Boolean, default: false },
  bottleShop: { type: Boolean, default: false },
  website: String, //website
  googleMaps: String, //url
  address: String, //vicinity
  addressDetail: [Object], //address_components
  logo: String,
  addedBy: String,
  lastEdit: String,
  googleId: String,
  phone: String, // formatted_phone_number
  openHoursText: [String], //opening_hours.weekday_text
  openHoursDetail: [Object], //opening_hours.periods
  placeId: String, //place_id
  rating: Number, //rating
  totalRatings: Number, //user_ratings_total
  types: [String], //types
  status: String, //business_status
});

const Locations = mongoose.model("Locations", LocationsSchema);

module.exports = Locations;
