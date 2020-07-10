import React, { Component } from "react";
import styled from "styled-components";

import Map from "./Map/Map";
import CheckBox from "./Checkbox";

const MapDiv = styled.div`
  width: 100vw;
`;

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 1;
  padding: 0.5rem;

  div {
    flex-grow: 1;
    }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  h1 {
    margin-left: 1rem;
    font-size: 1.5rem;
  }

  img {
    width: 4rem;
  }
`;

class Home extends Component {
  state = {
    barCheck: false,
    bottleShopCheck: false,
    /*  tapRoomCheck: false, */
  };

  handleCheck = (event) => {
    const { name, checked } = event.target;
    this.setState({
      [name]: checked,
    });
  };

  render() {
    const { barCheck, bottleShopCheck /* , tapRoomCheck */ } = this.state;
    return (
      <>
        <Head>
          <Logo>
            <img src={"./logo.svg"} />
            <h1>Berlin Craft Beer</h1>
          </Logo>
          <div>
            <CheckBox
              name="barCheck"
              value="Bars"
              checked={barCheck}
              onChange={this.handleCheck}
            />
            <CheckBox
              name="bottleShopCheck"
              value="Bottle Shops"
              checked={bottleShopCheck}
              onChange={this.handleCheck}
            />
            {/*  <CheckBox name="tapRoomCheck" value="TapRoom" checked={tapRoomCheck} onChange={this.handleCheck}/> */}
          </div>
        </Head>

        <MapDiv>
          <Map barCheck={barCheck} bottleShopCheck={bottleShopCheck} />
        </MapDiv>
      </>
    );
  }
}

export default Home;
