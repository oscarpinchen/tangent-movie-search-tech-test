import { render } from "@testing-library/react";
import TopFilm from "./TopFilm";

describe("TopFilm component", () => {
  let screen;
  beforeEach(() => {
    const mockProps = {
      director: "Oscar Pinchen",
      source: "image.jpg",
      title: "THE Movie",
    };
    screen = render(<TopFilm {...mockProps} />);
  });

  test("Should render a director name", () => {
    const directorName = screen.getByText("Oscar Pinchen");
    expect(directorName).toBeInTheDocument();
  });

  test("Should render image", () => {
    const image = screen.getByAltText("THE Movie poster");
    expect(image).toBeInTheDocument();
  });

  test("Should render a film title", () => {
    const filmTitle = screen.getByText("THE Movie");
    expect(filmTitle).toBeInTheDocument();
  });
});
