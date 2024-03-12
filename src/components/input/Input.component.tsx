// InputComponent.tsx
import React from "react";
import { Form } from "react-bootstrap";

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
  label,
}) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        placeholder={label}
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Form.Group>
  );
};

export default InputComponent;
