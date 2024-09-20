import { render, screen } from "@testing-library/react";
import Home from "@/app/(index)/page";

// write multiple tests
describe("Home", () => {
  // first test
  it("should have text: nice", () => {
    render(<Home />); // Arrange

    // get element by text: nice application
    // regex: i for case sensitive
    const element = screen.getByText(/nice/i); // act

    // check if element exists
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'getByText' does not exist on type 'typeof import("@testing-library/react").screen'.
    expect(element).toBeInTheDocument(); // assert
  });

  // second test
  it("should have text: application", () => {
    render(<Home />); // Arrange

    // get element by text: nice application
    // regex: i for case sensitive
    const element = screen.getByText(/application/i); // act

    // check if element exists
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'getByText' does not exist on type 'typeof import("@testing-library/react").screen'.
    expect(element).toBeInTheDocument(); // assert
  });

  // third test
  it("should have text: a heading with text: Learn", () => {
    render(<Home />); // Arrange

    // get element by text: nice application
    // regex: i for case sensitive
    const element = screen.getByRole("heading", {
      name: "Learn",
    }); // act

    // check if element exists
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'getByText' does not exist on type 'typeof import("@testing-library/react").screen'.
    expect(element).toBeInTheDocument(); // assert
  });
});
