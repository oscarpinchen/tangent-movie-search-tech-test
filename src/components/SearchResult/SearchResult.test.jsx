import { render } from "@testing-library/react";
import SearchResult from "./SearchResult";

describe("SearchResult component", () => {
  let screen;
  beforeEach(() => {
    const mockProps = {
      result: {
        Director: "George Lucas",
        Poster: "Starwar.jpg",
        Plot: "Starwar is a film",
        Title: "The Star Wars",
      },
    };
    screen = render(<SearchResult {...mockProps} />);
  });

  test("Should render director", () => {
    const director = screen.getByText("George Lucas");
    expect(director).toBeInTheDocument();
  });

  test("Should render movie poster", () => {
    const poster = screen.getByAltText("The Star Wars poster");
    expect(poster).toBeInTheDocument();
  });

  test("Should render plot", () => {
    const plot = screen.getByText("Starwar is a film");
    expect(plot).toBeInTheDocument();
  });

  test("Should render title", () => {
    const title = screen.getByText("The Star Wars");
    expect(title).toBeInTheDocument;
  });
});

describe("SearchResult component - no movie title", () => {
  test("Should return null", () => {
    const mockProps = {};
    const screen = render(<SearchResult {...mockProps} />);
    expect(screen.container.firstChild).toBeNull();
  });
});
