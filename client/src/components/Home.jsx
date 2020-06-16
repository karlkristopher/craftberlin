import React, { Component } from "react";
import styled from "styled-components";

import Map from "./Map/Map";
import Content from "./Map/Content";
import CheckBox from "./Checkbox";

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

const Head = styled.header`
  display: flex;
`;

class Home extends Component {
  state = {
    barCheck: true,
    bottleShopCheck: true,
    tapRoomCheck: true,
  };


  handleCheck = (event) => {
    const {name, checked} = event.target;
    this.setState({
      [name]: checked,
    });
  };

  render() {

   const {barCheck, bottleShopCheck, tapRoomCheck} = this.state
    return (
      <div>
        <Head>
          <div>
            <h1>Berlin Craft Beer</h1>
          </div>
          <div>
           <CheckBox name="barCheck" value="Bars" checked={barCheck} onChange={this.handleCheck}/>
           <CheckBox name="bottleShopCheck" value="Bottle Shops" checked={bottleShopCheck} onChange={this.handleCheck}/>
           <CheckBox name="tapRoomCheck" value="TapRoom?" checked={tapRoomCheck} onChange={this.handleCheck}/>
          </div>
        </Head>

        <SectionWrap>
          <MapDiv>
            <Map barCheck={barCheck} bottleShopCheck={bottleShopCheck} tapRoomCheck={tapRoomCheck}/>
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
