import { render } from "@testing-library/react";
import React from "react";
import Card, { CardImage, CardOverlay, CardTitle } from "./Card";

describe("<Card/>", () => {
  it("renders the <Card/> with populated data", () => {
    const { container, getByText,getByTestId } = render(
      <Card>
        <CardImage />
        <CardOverlay>
          <CardTitle name="Title" />
        </CardOverlay>
      </Card>
    );

    expect(getByText('Title')).toBeTruthy();
    expect(getByTestId("image")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();

    
  });

  it("renders the <Card/> without CardOverlay and CardTitle",() => {
      const {container,getByTestId,queryByText,queryByTestId} = render(
          <Card>
              <CardImage/>
          </Card>
      )
      expect(queryByText('Title')).toBeFalsy();
      expect(queryByTestId("overlay")).toBeFalsy();
      expect(getByTestId("image")).toBeTruthy();
      expect(container.firstChild).toMatchSnapshot();
  })

});
