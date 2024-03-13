import React from "react";
import { Form } from "react-bootstrap";

interface FilterProps {
  value: string;
  onChange: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ value, onChange }) => {
  return (
    <Form.Control
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Filtrar..."
    />
  );
};

export default Filter;
