import { render, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { ThemeToggle } from ".";

describe("Change Theme", () => {
  it("should show the toggle item of theme 1", async () => {
    const { getByLabelText } = render(<ThemeToggle />);

    const toggleItem1 = getByLabelText("toggle item 1");

    userEvent.click(toggleItem1);

    waitFor(() => {
      expect(toggleItem1).toHaveClass("opacity_100");
    });
  });

  it("should show the toggle item of theme 2", () => {
    const { getByLabelText } = render(<ThemeToggle />);

    const toggleItem2 = getByLabelText("toggle item 2");

    userEvent.click(toggleItem2);

    waitFor(() => {
      expect(toggleItem2).toHaveClass("opacity_100");
    });
  });

  it("should show the toggle item of theme 3", async () => {
    const { getByLabelText } = render(<ThemeToggle />);

    const toggleItem3 = getByLabelText("toggle item 3");

    await userEvent.click(toggleItem3);

    waitFor(() => {
      expect(toggleItem3).toHaveClass("opacity_100");
    });
  });
});
