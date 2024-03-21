import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BMICalculatorComponent from "./BMICalculatorComponent";

describe("BMICalculatorComponent", () => {
  test("renders correctly", () => {
    render(<BMICalculatorComponent />);

    // ตรวจสอบการแสดงหัวข้อ
    expect(screen.getByText(/BMI Calculator/i)).toBeInTheDocument();

    // ตรวจสอบการแสดงปุ่ม Calculate BMI
    expect(
      screen.getByRole("button", { name: /Calculate BMI/i })
    ).toBeInTheDocument();
  });
  test("text is not show", () => {
    render(<BMICalculatorComponent />);
    // ควรไม่แสดงผลลัพธ์
    expect(screen.queryByText(/Your BMI is:/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Interpretation:/i)).not.toBeInTheDocument();
  });
});
