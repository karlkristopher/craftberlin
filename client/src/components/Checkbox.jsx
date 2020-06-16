import React, { Component } from "react";

const CheckBox = (props) => {

  return (
    <>
      <label className="toggle-control">
      {props.value}
        <input type="checkbox" name={props.name} checked={props.checked} onChange={props.onChange}/>
        <span className="control"></span>
      </label>
    </>
  );
};

export default CheckBox;
