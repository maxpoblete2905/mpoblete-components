// DynamicForm.tsx
import React, { useState } from "react";
import "./form.css";
import "../grid/grid.css";
import InputComponent from "../input/Input";
import { ButtonComponent } from "../button/Button";
import { Label } from "../label/Label";

export interface FormField {
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
}

export interface DynamicFormProps {
  fields: FormField[];
  onSubmit: (formData: { [key: string]: string }) => void;
  color: "primary" | "secondary" | "dark";
  title: string;
  subTitle: string;
}

export const DynamicForm: React.FC<DynamicFormProps> = ({
  fields,
  onSubmit,
  color,
  title = "test",
  subTitle = "test",
}) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleInputChange = (id: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={`dynamic-form teme-${color} row`} onSubmit={handleSubmit}>
      <div className="col-12">
        <Label color={color} label={title} text={"large"} />
        {"  "}
        <Label color={color} label={subTitle} text={"medium"} />
        <hr />
      </div>
      {fields.map((field) => (
        <div className="col-6" key={field.id}>
          <Label color={color} label={field.label} text={"medium"} />
          <InputComponent
            id={field.id}
            label={field.label}
            type={field.type}
            value={formData[field.id] || ""}
            onChange={(value: string) => handleInputChange(field.id, value)}
            color={color}
          />
        </div>
      ))}

      <div className="col-12">
        <ButtonComponent color={color} />
      </div>
    </form>
  );
};
