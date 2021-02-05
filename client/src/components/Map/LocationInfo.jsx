import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LocationInfo = (props) => {
  const { info, setSelectedLocation } = props;

  const openHours = info.openHoursText.map((ele, i) => {
    return <li key={i.toString()}>{ele}</li>;
  });

  let gReview;
  if (info.totalRatings === 1) {
    gReview = `${info.rating} (${info.totalRatings} review)`;
  } else {
    gReview = `${info.rating} (${info.totalRatings} reviews)`;
  }

  let phoneLink;
  if (info.phone) {
    phoneLink = info.phone.replace(/\s/g, "");
  }

  return (
    <div className="box">
        <div className="box__controls">
            <button className="box-controls__close" onClick={() => setSelectedLocation("")}>
                <FontAwesomeIcon icon="times" />
            </button>
        </div>
        <div className="box__content">
            <h2>{props.info.name}</h2>
            <p>Google Rating: {gReview}</p>
            <p>{props.info.address}</p>
            {openHours.length > 1 && <p>Hours</p>}
            {openHours.length > 1 && <ul>{openHours}</ul>}
            {props.info.phone && (
                <p>
                    Phone: <a href={`tel:${phoneLink}`}>{props.info.phone}</a>
                </p>
            )}
            <div>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href={props.info.website}>
                        Website
                    </a>{" "}
                    |{" "}
                    <a target="_blank" rel="noopener noreferrer" href={props.info.googleMaps}>
                        Google Maps
                    </a>
                </p>
                {props.info.bottleShop && (
                    <p>
                        Bottle Shop <FontAwesomeIcon icon="wine-bottle" />
                    </p>
                )}
                {props.info.bar && (
                    <p>
                        Bar <FontAwesomeIcon icon="glass-cheers" />
                    </p>
                )}
            </div>
        </div>
    </div>
  );
};

export default LocationInfo;
