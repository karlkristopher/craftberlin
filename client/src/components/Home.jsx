import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import Map from "./Map/Map";
import LocationInfo from "./Map/LocationInfo";
import CheckBox from "./Checkbox";
import Loading from "./Loading";

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

const Home = () => {
  const [showOpen] = useState(false);
  const [barCheck, setBarCheck] = useState(false);
  const [bottleShopCheck, setBottleShopCheck] = useState(false);
  const [locations, setLocations] = useState([]);
  const [locateUser, setLocateUser] = useState({});
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 52.52,
    longitude: 13.405,
    zoom: 11,
  });

  //Handle Viewport Changes
  useEffect(() => {
    // If location is selected, change viewport based on location
    if (selectedLocation === "") {
      //If no location, set to default viewport
      setViewport((prevState) => ({
        width: "100vw",
        height: "100vh",
        latitude: 52.52,
        longitude: 13.405,
        zoom: 11,
      }));
    }
  }, [selectedLocation]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_GET_LOCATIONS)
      .then((response) => {
        setLocations(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  const handleChange = (event) => {
    if (event.target.name === "barCheck") setBarCheck((props) => !props);
    if (event.target.name === "bottleShopCheck")
      setBottleShopCheck((props) => !props);
  };

  // Filter Locations
  const showLocations = locations.filter((location) => {
    if (!barCheck && !bottleShopCheck) return true;
    if (!location.bar && barCheck && bottleShopCheck) return false;
    if (!location.bottleShop && barCheck && bottleShopCheck) return false;
    if (location.bar && barCheck) return true;
    return (location.bottleShop && bottleShopCheck);
  });

  const renderPopup = () =>
    selectedLocation ? (
      <LocationInfo
        info={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
    ) : (
      <></>
    );

  return (
    <>
      {isLoading && <Loading />}
      <Head>
        <Logo>
          <img src={"./logo.svg"} alt="berlin-craft logo" />
        </Logo>
        <Title>Berlin Craft Beer</Title>
        <Filters>
          <DropdownButton
            id="dropdown-item-button"
            variant="secondary"
            title="filter"
          >
            <Dropdown.Item as="button">
              <CheckBox
                name="barCheck"
                value="Bars"
                checked={barCheck}
                onChange={handleChange}
              />
            </Dropdown.Item>
            <Dropdown.Item as="button">
              {" "}
              <CheckBox
                name="bottleShopCheck"
                value="Bottle Shops"
                checked={bottleShopCheck}
                onChange={handleChange}
              />
            </Dropdown.Item>
          </DropdownButton>
        </Filters>
      </Head>

      <MapDiv>
        <Map
          barCheck={barCheck}
          bottleShopCheck={bottleShopCheck}
          showOpen={showOpen}
          showLocations={showLocations}
          viewport={viewport}
          setViewport={setViewport}
          locateUser={locateUser}
          setLocateUser={setLocateUser}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
        {/* Shows Location Data on Click */}
        {renderPopup()}
      </MapDiv>
    </>
  );
};

export default Home;
