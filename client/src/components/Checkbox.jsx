import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Box = styled.input`
  margin-right: 1rem;
`;

const CheckBox = (props) => {
  let icon = "";

  if (props.name === "barCheck") {
    icon = "glass-cheers";
  }
  if (props.name === "bottleShopCheck") {
    icon = "wine-bottle";
  }

  return (
    <div>
      <label className="toggle-control">
        <Box
          type="checkbox"
          name={props.name}
          checked={props.checked}
          onChange={props.onChange}
        />
        <FontAwesomeIcon icon={icon} />
        <span className="control"> {props.value}</span>
      </label>
    </div>
  );
};

export default CheckBox;
