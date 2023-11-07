import { render, screen } from "@testing-library/react";
import Dialog from ".";

describe("Dialog", () => {
  test("Dialog to be show", () => {
    render(<Dialog open>Hi</Dialog>);
    screen.getByText("Hi");
  });

  test("Dialog to be hidden", () => {
    render(<Dialog open={false}>Hi</Dialog>);
    expect(screen.queryByText("Hi")).toBeNull();
  });
});
