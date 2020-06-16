import * as React from "react";
import { PureComponent } from "react";
import styled from "styled-components";


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
`;

export default class LocationInfo extends PureComponent {
  render() {
    const { info } = this.props;

    return (
      <PopupBox>
        <h2>{info.name}</h2>
        <p>{info.address}</p>
        <div>
          <p>
            <a target="_new" href={info.website}>
              Website
            </a>
          </p>
          {info.tapRoom && <p>Tap Room ✅</p>}
          {info.bottleShop && <p>Bottle Shop ✅</p>}
          {info.bar && <p>Bar ✅</p>}
        </div>
      </PopupBox>
    );
  }
}
