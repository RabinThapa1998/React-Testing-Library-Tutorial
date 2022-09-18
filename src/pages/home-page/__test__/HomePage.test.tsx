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
it("renders homepage with color black on the screen", () => {
  render(<HomePage />);
  const headerElement = screen.getByText(/homepage/i);
  //   screen.debug();
  expect(headerElement).toHaveStyle("font-size: 3rem");
  expect(headerElement).toHaveStyle("font-weight: 400");
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
