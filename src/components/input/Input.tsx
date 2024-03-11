// InputComponent.tsx
import React from "react";
import "./input.css";
import "../grid/grid.css";

export interface InputComponentProps {
  id: string;
  label: string;
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "checkbox"
    | "radio"
    | "file"
    | "date"
    | "time"
    | "submit"
    | "reset"
    | "button"
    | "color"
    | "range"
    | "tel"
    | "url";
  value: string;
  color: "primary" | "secondary" | "dark";
  onChange: (value: string) => void;
}

export const InputComponent: React.FC<InputComponentProps> = ({
  id,
  type,
  value,
  onChange,
  color,
}) => {
  return (
    <input
      className={`dynamic-input teme-${color} focus-${color} input`}
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputComponent;
