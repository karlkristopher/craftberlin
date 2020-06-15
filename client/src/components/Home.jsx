import React, { Component } from "react";
import styled from "styled-components";

import Map from "./Map/Map";
import Content from "./Map/Content";

const SectionWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  div {
    /* margin: 1rem; */
  }
`;

const MapDiv = styled.div`
  width: 100vw;
`;

const ContentDiv = styled.div`
  width: 100vw;
`;

class Home extends Component {
  state = {};



  
  render() {
    return (
      <div>
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
