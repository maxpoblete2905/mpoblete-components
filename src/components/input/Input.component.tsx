// Input.component.js

import { ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import { Theme } from "../../types/theme";
import { ThemeInterface } from "../../interfaces/themeColor";
import { handlerTheme } from "../../customTheme/handlerThemeColor";

export interface InputComponentProps {
  id: string;
  label: string;
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "file"
    | "date"
    | "time"
    | "color"
    | "range"
    | "tel";
  value: string;
  placeholder: string;
  theme: Theme;
  isneon: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void; // No es necesario cambiar el tipo de onChange
}

export const CustomInput = ({
  id,
  label,
  placeholder,
  value,
  handleChange,
  type,
  theme,
  isneon,
}: InputComponentProps) => {
  const stylesTheme: ThemeInterface = handlerTheme(theme);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e); // Pasar solo el evento de cambio a la función onChange
  };

  const neonEffect = ` 0 0 10px ${stylesTheme.textOnPrimary}, 0 0 10px ${stylesTheme.textOnPrimary}, 0 0 10px ${stylesTheme.primary}, 0 0 10px ${stylesTheme.textOnPrimary}`;

  return (
    <Form.Group controlId={`customInput-${id}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={id}
        type={type || "text"}
        placeholder={placeholder || ""}
        value={value}
        onChange={handleChangeInput} // Usar la función handleChange para manejar el cambio
        style={{
          backgroundColor: stylesTheme.inputBackground,
          color: stylesTheme.inputText,
          boxShadow: isneon ? neonEffect : "", // Aplicar el efecto de neón al botón
        }}
      />
    </Form.Group>
  );
};
