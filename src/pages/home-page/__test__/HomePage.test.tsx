/* eslint-disable testing-library/no-debugging-utils */
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

describe("Homepage-test", () => {
  it("renders button on the dom", () => {
    render(<HomePage />);
    const ButtonElement = screen.getByRole("button", { name: "Generate" });
    screen.debug();
    expect(ButtonElement).toBeInTheDocument();
    expect(ButtonElement).toHaveStyle(
      "padding: 6px 16px;font-weight: 500;    text-transform: uppercase;"
    );
  });

  // it("renders new input ELement on the screen", () => {
  //   render(<HomePage />);
  //   const NewInputElement = screen.getByTestId("newInputTestId");
  //   expect(NewInputElement).toBeInTheDocument();
  // });
  it("renders a single card on the display", () => {
    render(<HomePage />);
    const ButtonElement = screen.getByRole("button", { name: /generate/i });
    fireEvent.click(ButtonElement);
    const CardComp = screen.getByTestId(0);
    expect(CardComp).toBeInTheDocument();
  });

  it("renders a name value from inputfield on a card with test-id-0", () => {
    render(<HomePage />);
    const InputElement = screen.getByTestId("name-0");
    fireEvent.change(InputElement, { target: { value: "Rohan" } });
    const ButtonElement = screen.getByRole("button", { name: /generate/i });
    fireEvent.click(ButtonElement);
    const CardComp = screen.getByTestId(0);
    // expect(CardComp).toBeInTheDocument();
    expect(CardComp).toHaveTextContent("Rohan");
    screen.debug();
  });
});
