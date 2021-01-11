import React from "react";
import ReactDOM from "react-dom";
import Map from "../components/Map/Map";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";

afterEach(cleanup);

// Test Get Locations Route
test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Map />, div);
});
