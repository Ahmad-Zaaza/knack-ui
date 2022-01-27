import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button variant="primary">Hello</Button>);
  });
  it("should have the right text color class name for variants", () => {
    // we extract the "rerender" method to test both variants
    const { getByRole, rerender, debug } = render(<Button variant="primary" />);
    const buttonElement = getByRole("button");
    debug();
    expect(buttonElement).toHaveClass("bg-primary");
    rerender(<Button variant="secondary" />);
    expect(buttonElement).toHaveClass("bg-secondary");
  });
});
