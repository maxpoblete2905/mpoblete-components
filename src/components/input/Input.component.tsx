import { ChangeEvent } from "react";
import { Theme } from "../../types/theme";
import { ThemeInterface } from "../../interfaces/themeColor";
import { handlerTheme } from "../../Theme/handlerThemeColor";
import "./input.css"; // Importar el archivo CSS que contiene las clases necesarias

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
  errors: boolean;
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
  errors,
}: InputComponentProps) => {
  const stylesTheme: ThemeInterface = handlerTheme(theme);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e); // Pasar solo el evento de cambio a la función onChange
  };

  const colorFinal = errors ? "red" : stylesTheme.textOnPrimary;
  const neonEffect = ` 0 0 10px ${colorFinal}, 0 0 10px ${colorFinal}, 0 0 10px ${colorFinal}, 0 0 10px ${colorFinal}`;

  return (
    <div className="form-group">
      <label htmlFor={`customInput-${id}`}>{label}</label>
      <input
        className="form-control"
        name={id}
        type={type || "text"}
        placeholder={placeholder || ""}
        value={value}
        onChange={handleChangeInput} // Usar la función handleChange para manejar el cambio
        max={new Date().toISOString().split("T")[0]}
      />
    </div>
  );
};
