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

const LoadingSpinnerWrapper = styled.div`
  width: 100px;
`;

const Loading = () => {
  return (
    <LoadingPage>
      <LoadingSpinnerWrapper>
        <LoadingSpinner />
      </LoadingSpinnerWrapper>
      <h2>Pouring in Berlin...</h2>
    </LoadingPage>
  );
};

export default Loading;
