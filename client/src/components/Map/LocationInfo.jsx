import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TempClosed = styled.p`
  color: red;
  font-weight: bold;
  padding-bottom: 0.5rem;
`;

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
      <button onClick={() => setSelectedLocation("")}>Close</button>
      <h2>{props.info.name}</h2>
      {props.info.status === "CLOSED_TEMPORARILY" && (
        <TempClosed>Temporarily Closed</TempClosed>
      )}
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
          <a target="_new" href={props.info.website}>
            Website
          </a>{" "}
          |{" "}
          <a target="_new" href={props.info.googleMaps}>
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
  );
};

export default LocationInfo;
