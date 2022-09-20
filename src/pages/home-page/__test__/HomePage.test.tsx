import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import HomePage from "../HomePage";
it("renders button on the dom", () => {
  render(<HomePage />);
  const ButtonElement = screen.getByRole("button", { name: "Generate" });
  screen.debug();
  expect(ButtonElement).toBeInTheDocument();
  expect(ButtonElement).toHaveStyle(
    "padding: 6px 16px;font-weight: 500;    text-transform: uppercase;"
  );
});

it("renders image on the dom", () => {
  render(<HomePage />);
  const ImageElement = screen.getByAltText("bg-img");
  screen.debug();
  expect(ImageElement).toBeInTheDocument();
});
