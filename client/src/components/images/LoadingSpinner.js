import React from "react";

export const LoadingSpinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsxlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx="30" cy="50" fill="#111111" r="20">
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;0.5;1"
          values="30;70;30"
          begin="-0.5s"
        ></animate>
      </circle>
      <circle cx="70" cy="50" fill="#949494" r="20">
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;0.5;1"
          values="30;70;30"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="30" cy="50" fill="#111111" r="20">
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;0.5;1"
          values="30;70;30"
          begin="-0.5s"
        ></animate>
        <animate
          attributeName="fill-opacity"
          values="0;0;1;1"
          calcMode="discrete"
          keyTimes="0;0.499;0.5;1"
          dur="1s"
          repeatCount="indefinite"
        ></animate>
      </circle>
    </svg>
  );
};
