import React, { Component } from "react";
import styled from "styled-components";

import Map from "./Map/Map";
import Content from "./Map/Content";

const SectionWrap = styled.section`
  display: flex;
  div {
    margin: 1rem;
  }
`;

const MapDiv = styled.div`
  width: 55%;

`;

const ContentDiv = styled.div`
  width: 45%;
`;

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1>Berlin Craft Beer</h1>
        <SectionWrap>
          <MapDiv>
            <Map />
          </MapDiv>
          <ContentDiv>
            <Content />
          </ContentDiv>
        </SectionWrap>
      </div>
    );
  }
}

export default Home;
