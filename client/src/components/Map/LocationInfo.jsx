import * as React from "react";
import { PureComponent } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PopupBox = styled.div`
  padding-top: 0.8rem;

  h2 {
    font-size: 0.9rem;
  }

  div > p {
    margin-top: 4 rem; /* Does not work */
  }
  p {
    font-size: 0.8rem;
    margin: 0.2rem 0rem;
    padding: 0px;
  }

  li {
    font-size: 0.7rem;
  }
`;

const TempClosed = styled.p`
  color: red;
  font-weight: bold;
  padding-bottom: 0.5rem;
`;

export default class LocationInfo extends PureComponent {
  render() {
    const { info } = this.props;

    const openHours = info.openHoursText.map((ele, i) => {
      return <li key={i.toString()}>{ele}</li>;
    });

    let gReview;

    if (info.totalRatings === 1) {
      gReview = `${info.rating} (${info.totalRatings} review)`;
    } else {
      gReview = `${info.rating} (${info.totalRatings} reviews)`;
    }

    //Create clickable phone link. Could be added to the backend at some point.

    let phoneLink;

    if (info.phone) {
      phoneLink = info.phone.replace(/\s/g, "");
    }

    return (
      <PopupBox>
        <h2>{info.name}</h2>
        {info.status === "CLOSED_TEMPORARILY" && (
          <TempClosed>Temporarily Closed</TempClosed>
        )}
        <p>Google Rating: {info.totalRatings ? gReview : "no reviews yet"}</p>
        <p>{info.address}</p>
        {info.openHoursText.length > 1 && <p>Hours</p>}
        {info.openHoursText.length > 1 && <ul>{openHours}</ul>}
        {info.phone && (
          <p>
            Phone: <a href={`tel:${phoneLink}`}>{info.phone}</a>
          </p>
        )}
        <div>
          <p>
            <a target="_new" href={info.website}>
              Website
            </a>{" "}
            |{" "}
            <a target="_new" href={info.googleMaps}>
              Google Maps
            </a>
          </p>
          {info.bottleShop && (
            <p>
              Bottle Shop <FontAwesomeIcon icon="wine-bottle" />
            </p>
          )}
          {info.bar && (
            <p>
              Bar <FontAwesomeIcon icon="glass-cheers" />
            </p>
          )}
        </div>
      </PopupBox>
    );
  }
}
