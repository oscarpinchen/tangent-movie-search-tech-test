import { fireEvent, render } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar component", () => {
  let screen;
  beforeEach(() => {
    const mockProps = {
      onChange: jest.fn(),
      onClick: jest.fn(),
      value: "",
    };
    screen = render(<SearchBar {...mockProps} />);
  });

  test("Should render input", () => {
    const input = screen.getByPlaceholderText("Enter your film here");
    expect(input).toBeInTheDocument();
  });

  test("Should render search button", () => {
    const button = screen.getByText("Search");
    expect(button).toBeInTheDocument();
  });

  test("should update input on change", () => {
    const input = screen.getByPlaceholderText("Enter your film here");
    fireEvent.change(input, { target: { value: "King Kong" } });
    expect(input.value).toBe("King Kong");
  });
});
