import { Button } from "react-bootstrap";
import { Theme } from "../../types/theme";
import { ThemeInterface } from "../../interfaces/themeColor";
import { handlerTheme } from "../../customTheme/handlerThemeColor";

export interface ButtonComponentProps {
  onClickEvent?: () => void;
  theme?: Theme;
  size?: "lg" | "sm";
  label?: string;
  type?: "button" | "reset" | "submit" | undefined;
  AllCaps?: boolean;
  customTextColor?: string;
  isneon: boolean;
}

export const ButtonComponent = ({
  theme = "primary",
  size = "sm",
  label = "button actions",
  onClickEvent,
  type = "submit",
  AllCaps = false,
  isneon = false,
}: ButtonComponentProps) => {
  const stylesTheme: ThemeInterface = handlerTheme(theme);

  const neonEffect = ` 0 0 10px ${stylesTheme.textOnPrimary}, 0 0 10px ${stylesTheme.textOnPrimary}, 0 0 10px ${stylesTheme.primary}, 0 0 10px ${stylesTheme.textOnPrimary}`;
  const data = AllCaps ? label.toUpperCase() : label;

  return (
    <Button
      onClick={() => onClickEvent && onClickEvent()}
      type={type}
      variant={theme}
      size={size}
      style={{
        background: stylesTheme.buttonBackground,
        color: stylesTheme.buttonText,
        boxShadow: isneon ? neonEffect : "", // Aplicar el efecto de neón al botón
        margin: "3px",
      }}
    >
      {data}
    </Button>
  );
};
