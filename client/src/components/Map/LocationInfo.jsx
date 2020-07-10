import * as React from "react";
import { PureComponent } from "react";
import { Link } from "react-router-dom";
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

const Reviews = styled.span`
  font-size: 0.6rem;
`;

export default class LocationInfo extends PureComponent {
  render() {
    const { info } = this.props;

    const openHours = info.openHoursText.map((ele, i) => {
      return <li key={i.toString()}>{ele}</li>;
    });

    return (
      <PopupBox>
        <h2>{info.name}</h2>
        <p>
          Google Rating: {info.rating}{" "}
          <Reviews>
            (
            {info.totalRatings == 1
              ? `${info.totalRatings} review`
              : `${info.totalRatings} reviews`}
            )
          </Reviews>
        </p>
        <p>{info.address}</p>
        <p>Hours</p>
        <ul>{openHours}</ul>
        <p>
          Phone:{" "}
          <Link>
            <a href={`tel:${info.phone}`}>{info.phone}</a>
          </Link>
        </p>
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
