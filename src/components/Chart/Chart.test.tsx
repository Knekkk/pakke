import React from "react";
import { render } from "@testing-library/react";

import Chart from "./Chart";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Chart height={100} width={100} />);
  });
});