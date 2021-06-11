import { fireEvent, render, waitFor } from "@testing-library/react";
import App from "./App";
import { getFilm } from "../../services/getFilm";

jest.mock("../../services/getFilm");

describe("App component", () => {
  let screen;
  beforeEach(() => {
    screen = render(<App />);
  });

  test("Should render app title", () => {
    const title = screen.getByText("Movie Search");
    expect(title).toBeInTheDocument();
  });

  test("Should render top movies heading", () => {
    const topMovies = screen.getByText("Top Movies");
    expect(topMovies).toBeInTheDocument();
  });

  test("Should show movie result", async () => {
    const input = screen.getByPlaceholderText("Enter your film here");
    const button = screen.getByText("Search");

    getFilm.mockResolvedValueOnce({
      Title: "Film Title",
      Director: "Film Director",
      Released: "This Year",
      Poster: "image.jpg",
      Plot: "An exciting film.",
    });

    fireEvent.change(input, { target: { value: "Film Title" } });
    fireEvent.click(button);
    await waitFor(() =>
      expect(screen.getByText("Film Title")).toBeInTheDocument()
    );
  });
});
