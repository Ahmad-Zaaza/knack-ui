import { render } from "@testing-library/react";
import Toggle from "../Toggle";

describe("Toggle", () => {
  it("Renders a Toggle",async  () => {
    const { findByTestId } = render(<Toggle />);
    const toggle = await findByTestId("k-toggle");
    expect(toggle).toBeInTheDocument();
  });
});
