import React, { useState } from "react";

// Function to perform string calculation with TDD rules
export function add(numbers: string): number {
  if (!numbers) return 0;

  if (numbers.slice(0, 2) == "//") {
    const delimiter = RegExp(numbers[2], "g");
    numbers = numbers.replace(numbers.slice(0, 3), "");
    numbers = numbers.replace(delimiter, ",");
  }

  if (numbers.indexOf("\n") !== -1) {
    numbers = numbers.replace(/\n/g, ",");
  }

  if (numbers.indexOf(",") !== -1) {
    const nums = numbers.split(",").map(Number);
    const negativeNumbers = nums.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(
        `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
      );
    }

    return nums
      .filter((item) => parseInt(item.toString()) < 1000)
      .reduce((a, b) => a + b, 0);
  }

  const num = parseInt(numbers);
  if (num < 0) {
    throw new Error(`Negative numbers not allowed: ${numbers}`);
  }
  return num;
}

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | string>("");

  const handleCalculate = () => {
    try {
      setResult(add(input));
    } catch (error) {
      setResult(error instanceof Error ? error.message : "An error occurred");
    }
  };

  return (
    <div className="calculator" style={calculatorStyles}>
      <h2 style={headingStyles}>String Calculator</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers..."
        style={textareaStyles}
      />
      <button onClick={handleCalculate} style={buttonStyles}>
        Calculate
      </button>
      <h3 style={resultStyles}>Result: {result}</h3>
    </div>
  );
};

const calculatorStyles: React.CSSProperties = {
  maxWidth: "600px",
  margin: "20px auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#f9f9f9",
  textAlign: "center",
};

const headingStyles: React.CSSProperties = {
  color: "#333",
  marginBottom: "20px",
};

const textareaStyles: React.CSSProperties = {
  width: "90%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "4px",
  border: "1px solid #ddd",
  fontSize: "16px",
  minHeight: "100px",
  resize: "vertical",
};

const buttonStyles: React.CSSProperties = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const resultStyles: React.CSSProperties = {
  marginTop: "20px",
  fontSize: "18px",
  color: "#555",
};

export default StringCalculator;