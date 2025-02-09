// Tests
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import StringCalculator, { add } from "./StringCalculator"; // Import the add function

describe("String Calculator Logic", () => {
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns number itself when only one number is provided", () => {
    expect(add("1")).toBe(1);
  });

  test("returns sum of two numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  test("handles multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("handles new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("supports different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("throws error for negative numbers", () => {
    expect(() => add("-4")).toThrow("Negative numbers not allowed: -4");
  });

  test("throws error for multiple negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow(
      "Negative numbers not allowed: -2, -4"
    );
  });

  test("ignores numbers greater than or equal to 1000", () => {
    expect(add("2,1000")).toBe(2);
  });
});

describe("String Calculator UI", () => {
  test("renders textarea, button, and result area", () => {
    render(<StringCalculator />);
    expect(screen.getByPlaceholderText("Enter numbers...")).toBeInTheDocument();
    expect(screen.getByText("Calculate")).toBeInTheDocument();
  });

  test("calculates sum when button is clicked", () => {
    render(<StringCalculator />);
    const textarea = screen.getByPlaceholderText("Enter numbers...");
    const button = screen.getByText("Calculate");
    fireEvent.change(textarea, { target: { value: "1,2,3" } });
    fireEvent.click(button);
    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });

  test("displays error for negative numbers", () => {
    render(<StringCalculator />);
    const textarea = screen.getByPlaceholderText("Enter numbers...");
    const button = screen.getByText("Calculate");
    fireEvent.change(textarea, { target: { value: "-4" } });
    fireEvent.click(button);
    expect(
      screen.getByText(/Negative numbers not allowed: -4/)
    ).toBeInTheDocument();
  });

  test("handles newlines in the UI", () => {
    render(<StringCalculator />);
    const textarea = screen.getByPlaceholderText("Enter numbers...");
    const button = screen.getByText("Calculate");
    fireEvent.change(textarea, { target: { value: "1\n2,3" } });
    fireEvent.click(button);
    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });
});