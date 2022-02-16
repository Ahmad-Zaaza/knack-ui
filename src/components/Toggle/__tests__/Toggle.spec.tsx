import { render } from "@testing-library/react";
import Toggle from "../Toggle";

describe("Toggle", () => {
  it("Renders a Toggle", () => {
    const { findByTestId } = render(<Toggle />);
    const toggle = findByTestId("k-toggle");
    expect(toggle).toBeInTheDocument();
  });
});
