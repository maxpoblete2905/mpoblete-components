import React from "react";
import { CustomInput } from "../input/Input.component";

interface FilterProps {
  value: string;
  onChange: (value: string) => void;
}

interface Data {
  type:
    | "number"
    | "text"
    | "email"
    | "password"
    | "file"
    | "date"
    | "time"
    | "color"
    | "range"
    | "tel";
  label: string;
}

const Filter: React.FC<FilterProps> = ({ value, onChange }) => {
  const inputConfigs: Data[] = [
    {
      type: "text",
      label: "Filtrar...",
    },
    {
      type: "date",
      label: "desde",
    },
    {
      type: "date",
      label: "hasta",
    },
  ];

  return (
    <>
      {inputConfigs.map((config, index) => (
        <div
          key={index}
          className="d-inline-block"
          style={{ marginRight: "5px" }}
        >
          <CustomInput
            id={""}
            label={config.label}
            type={config.type}
            value={value}
            placeholder={config.label}
            theme={"primary"}
            isneon={false}
            errors={false}
            handleChange={(e) => onChange(e.target.value)}
          />
        </div>
      ))}
    </>
  );
};

export default Filter;
