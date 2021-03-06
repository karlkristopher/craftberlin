import React from "react";

const LocationChange = (props) => {
  const displayTypes = props.input.types.map((type, i) => {
    return <li key={i.toString()}>{type}</li>;
  });

  const displayHours = props.input.openHoursText.map((ele, i) => {
    return <li key={i.toString()}>{ele}</li>
  });

  
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Location Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter name"
            value={props.input.name}
            onChange={props.handleChange}
          />
        </div>
        {displayTypes.length > 0 && (
          <div>
            <p>Google Type Suggestions:</p>
            <ul>{displayTypes}</ul>
          </div>
        )}
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="bar"
            name="bar"
            checked={props.input.bar}
            onChange={props.handleCheck}
          />
          <label className="form-check-label" htmlFor="bar">
            Bar?
          </label>
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="bottleShop"
            name="bottleShop"
            checked={props.input.bottleShop}
            onChange={props.handleCheck}
          />
          <label className="form-check-label" htmlFor="bottleShop">
            Bottle Shop?
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            className="custom-select"
            id="status"
            name="status"
            value={props.input.status}
            onChange={props.handleChange}
          >
            <option value="">Select Status</option>
            <option value="OPERATIONAL">Operational</option>
            <option value="CLOSED_TEMPORARILY">Temp Closed</option>
            <option value="CLOSED_PERMANENTLY">Perm Closed</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="latitude">Coordinates (Latitude)</label>
          <input
            type="number"
            className="form-control"
            id="latitude"
            name="latitude"
            placeholder="Enter Latitude as number (N+ S-)"
            value={props.input.latitude}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="longitude">Coordinates (Longitude)</label>
          <input
            type="number"
            className="form-control"
            id="longitude"
            name="longitude"
            placeholder="Enter Longitude as number (E+ W-)"
            value={props.input.longitude}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            className="form-control"
            id="address"
            placeholder="Enter address"
            value={props.input.address}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hours">Open Hours</label>
          {props.input.openHoursText.length > 0 && <ul>{displayHours}</ul>}
        </div>
        <div className="form-group">
          <label htmlFor="googleMaps">Google Map Link</label>
          <input
            type="text"
            className="form-control"
            name="googleMaps"
            id="googleMaps"
            placeholder="Enter Google Maps Link"
            value={props.input.googleMaps}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone #</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            id="phone"
            placeholder="Enter Phone #"
            value={props.input.phone}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            className="form-control"
            name="website"
            id="website"
            placeholder="Enter website"
            value={props.input.website}
            onChange={props.handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default LocationChange;
