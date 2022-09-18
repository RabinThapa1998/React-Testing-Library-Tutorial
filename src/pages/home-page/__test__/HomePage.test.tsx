import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import HomePage from "../HomePage";

afterEach(cleanup);

it("renders homepage on the screen", () => {
  render(<HomePage />);
  const headerElement = screen.getByText(/homepage/i);
  expect(headerElement).toBeInTheDocument();
});
it("renders generate button on the screen", () => {
  render(<HomePage />);
  const btnElement = screen.getByTestId("generate");
  expect(btnElement).toBeInTheDocument();
});
it("renders age field on the screen", () => {
  render(<HomePage />);
  const ageTextFieldElement = screen.getByTestId("age-1");
  expect(ageTextFieldElement).toBeInTheDocument();
});

it("renders generate button click and display card", () => {
  render(<HomePage />);
  const ageTextFieldElement = screen.getByTestId("age-1");
  expect(ageTextFieldElement).toBeInTheDocument();
  fireEvent.change(ageTextFieldElement, {
    target: { value: 10 },
  });

  const btnElement = screen.getByRole("button", { name: "Generate" });
  fireEvent.click(btnElement);
  //   screen.debug();
  const cardElement = screen.getByTestId(0);
  expect(cardElement).toBeInTheDocument();
  expect(cardElement).toHaveTextContent("Age: 10");
});
