import React, { Component } from "react";
import styled from "styled-components";

import Map from "./Map/Map";
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
            <img src="/logo.svg" />
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
        </SectionWrap>
      </div>
    );
  }
}

export default Home;
