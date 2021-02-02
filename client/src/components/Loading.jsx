import React from "react";
import styled from "styled-components";
import { LoadingSpinner } from "./images/LoadingSpinner";

const LoadingPage = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoadingText = styled.h2``;

const Loading = () => {
  return (
    <LoadingPage>
      <LoadingSpinner />
      <LoadingText>Getting Locations</LoadingText>
    </LoadingPage>
  );
};

export default Loading;
