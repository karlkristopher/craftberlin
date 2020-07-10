import React, { Component } from "react";
import styled from "styled-components";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

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
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 3;
  h1 {
    margin-left: 1rem;
    font-size: 1.5rem;
  }

  img {
    width: 4rem;
  }
`;

const Filters = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-end;
  align-items: flex-start;
`;

class Home extends Component {
  state = {
    barCheck: false,
    bottleShopCheck: false,
  };

  handleCheck = (event) => {
    const { name, checked } = event.target;
    this.setState({
      [name]: checked,
    });
  };

  render() {
    const { barCheck, bottleShopCheck } = this.state;
    return (
      <>
        <Head>
          <Logo>
            <img src={"./logo.svg"} />
            <h1><b>Berlin Craft Beer</b></h1>
          </Logo>
          <Filters>
            <DropdownButton id="dropdown-item-button" variant="secondary" title="filter">
              <Dropdown.Item as="button">
                {" "}
                <CheckBox
                  name="barCheck"
                  value="Bars"
                  checked={barCheck}
                  onChange={this.handleCheck}
                />
              </Dropdown.Item>
              <Dropdown.Item as="button">
                {" "}
                <CheckBox
                  name="bottleShopCheck"
                  value="Bottle Shops"
                  checked={bottleShopCheck}
                  onChange={this.handleCheck}
                />
              </Dropdown.Item>
            </DropdownButton>

          </Filters>
        </Head>

        <MapDiv>
          <Map barCheck={barCheck} bottleShopCheck={bottleShopCheck} />
        </MapDiv>
      </>
    );
  }
}

export default Home;
