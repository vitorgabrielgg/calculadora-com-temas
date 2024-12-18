import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { act } from "react";
import App from "../../../App";

describe("Change Theme", () => {
  it("should show the toggle item of theme 1", async () => {
    renderApp();

    const toggleItem1 = screen.getByLabelText("toggle item 1");

    await act(async () => {
      await userEvent.click(toggleItem1);
    });

    expect(toggleItem1).toHaveClass("opacity_100");
  });

  it("should show the toggle item of theme 2", async () => {
    renderApp();

    const toggleItem2 = screen.getByLabelText("toggle item 2");

    await act(async () => {
      await userEvent.click(toggleItem2);
    });

    expect(toggleItem2).toHaveClass("opacity_100");
  });

  it("should show the toggle item of theme 3", async () => {
    renderApp();

    const toggleItem3 = screen.getByLabelText("toggle item 3");

    await act(async () => {
      await userEvent.click(toggleItem3);
    });

    expect(toggleItem3).toHaveClass("opacity_100");
  });
});

const renderApp = () => {
  render(<App />);
};
