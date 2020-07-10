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
  padding: .5rem;

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
    const {name, checked} = event.target;
    this.setState({
      [name]: checked,
    });
  };

  render() {

   const {barCheck, bottleShopCheck/* , tapRoomCheck */} = this.state
    return (
      <>
        <Head>
            <img src={"./logo.svg"} />
          <div>
           <CheckBox name="barCheck" value="Bars" checked={barCheck} onChange={this.handleCheck}/>
           <CheckBox name="bottleShopCheck" value="Bottle Shops" checked={bottleShopCheck} onChange={this.handleCheck}/>
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
