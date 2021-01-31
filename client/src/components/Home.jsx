import React, { Component } from "react";
import styled from "styled-components";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import Map from "./Map/Map";
import CheckBox from "./Checkbox";

const MapDiv = styled.div`
  width: 100vw;
`;

const Head = styled.nav`
  display: flex;
  position: fixed;
  z-index: 1;
  padding: 2em;
  align-items: center;
  width: 100%;
`;

const Logo = styled.div`
  width: 3em;
  img {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  user-select: none;
  margin-bottom: 0;
  margin-left: 0.5em;
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

const FiltersButton = styled.button`
  font-size: 1.5em;
  text-decoration: underline;
  text-transform: lowercase;
  border: none;
  outline: none;
  background: transparent;
  font-weight: 500;
`;

class Home extends Component {
  state = {
    barCheck: false,
    bottleShopCheck: false,
    showOpen: false,
  };

  handleCheck = (event) => {
    const { name, checked } = event.target;
    this.setState({
      [name]: checked,
    });
  };

  render() {
    const { barCheck, bottleShopCheck, showOpen } = this.state;

    return (
      <>
        <Head>
          <Logo>
            <img src={"./logo.svg"} alt="berlin-craft logo" />
          </Logo>
          <Title>
            Berlin Craft Beer
          </Title>
          <Filters>
            <FiltersButton>
              Filter
            </FiltersButton>
            {/*<DropdownButton*/}
            {/*  id="dropdown-item-button"*/}
            {/*  variant="secondary"*/}
            {/*  title="filter"*/}
            {/*>*/}
            {/*  <Dropdown.Item as="button">*/}
            {/*    {" "}*/}
            {/*    <CheckBox*/}
            {/*      name="barCheck"*/}
            {/*      value="Bars"*/}
            {/*      checked={barCheck}*/}
            {/*      onChange={this.handleCheck}*/}
            {/*    />*/}
            {/*  </Dropdown.Item>*/}
            {/*  <Dropdown.Item as="button">*/}
            {/*    {" "}*/}
            {/*    <CheckBox*/}
            {/*      name="bottleShopCheck"*/}
            {/*      value="Bottle Shops"*/}
            {/*      checked={bottleShopCheck}*/}
            {/*      onChange={this.handleCheck}*/}
            {/*    />*/}
            {/*  </Dropdown.Item>*/}
            {/*</DropdownButton>*/}
          </Filters>
        </Head>

        <MapDiv>
          <Map
            barCheck={barCheck}
            bottleShopCheck={bottleShopCheck}
            showOpen={showOpen}
          />
        </MapDiv>
      </>
    );
  }
}

export default Home;
