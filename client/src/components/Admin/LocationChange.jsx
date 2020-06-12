import React from "react";

const LocationChange = (props) => {
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
            id="tapRoom"
            name="tapRoom"
            checked={props.input.tapRoom}
            onChange={props.handleCheck}
          />
          <label className="form-check-label" htmlFor="tapRoom">
            Tap Room?
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
