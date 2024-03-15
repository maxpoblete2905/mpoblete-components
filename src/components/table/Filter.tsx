import React, { ChangeEvent, useState } from "react";
import { CustomInput } from "../input/Input.component";

interface FilterProps {
  value: string[];
  onChange: (value: string[]) => void;
}

interface Data {
  type: "text" | "date";
  label: string;
}

const Filter: React.FC<FilterProps> = ({ value, onChange }) => {
  const [textValue, setTextValue] = useState<string>(value[0]);
  const [dateFromValue, setDateFromValue] = useState<string>(value[1]);
  const [dateToValue, setDateToValue] = useState<string>(value[2]);

  const inputConfigs: Data[] = [
    {
      type: "text",
      label: "Filtrar...",
    },
    {
      type: "date",
      label: "Desde",
    },
    {
      type: "date",
      label: "Hasta",
    },
  ];

  const handleTextChange = (text: string) => {
    setTextValue(text);
    onChange([text, dateFromValue, dateToValue]);
  };

  const handleDateFromChange = (date: string) => {
    setDateFromValue(date);
    if (dateToValue && new Date(date) > new Date(dateToValue)) {
      alert("La fecha de inicio no puede ser mayor que la fecha de fin");
      // También puedes manejar la lógica para revertir los valores o tomar otra acción
    } else {
      onChange([textValue, date, dateToValue]);
    }
  };

  const handleDateToChange = (date: string) => {
    setDateToValue(date);
    if (dateFromValue && new Date(date) < new Date(dateFromValue)) {
      alert("La fecha de fin no puede ser menor que la fecha de inicio");
      // También puedes manejar la lógica para revertir los valores o tomar otra acción
    } else {
      onChange([textValue, dateFromValue, date]);
    }
  };

  return (
    <>
      {inputConfigs.map(({ label, type }, index) => (
        <div
          key={label}
          className="d-inline-block"
          style={{ marginRight: "5px" }}
        >
          {type === "text" ? (
            <CustomInput
              id={""}
              label={label}
              type={type}
              value={textValue}
              placeholder={label}
              theme={"primary"}
              isneon={false}
              errors={false}
              handleChange={(e) => handleTextChange(e.target.value)}
            />
          ) : (
            <CustomInput
              type={type}
              value={index === 1 ? dateFromValue : dateToValue}
              handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                label.toLowerCase() === "desde"
                  ? handleDateFromChange(e.target.value)
                  : handleDateToChange(e.target.value)
              }
              id={label.toLowerCase()}
              label={label}
              placeholder={label.toLowerCase()}
              theme={"primary"}
              isneon={false}
              errors={false}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default Filter;
