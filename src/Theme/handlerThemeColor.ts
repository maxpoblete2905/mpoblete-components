import { ThemeInterface } from "../interfaces/themeColor";
import { Theme } from "../types/theme";
import { themeColors } from "./colorsTheme";

export const handlerTheme = (theme: Theme): ThemeInterface => {
  switch (theme) {
    case "primary":
      return themeColors.primary;
    case "secondary":
      return themeColors.secondary;
    case "success":
      return themeColors.success;
    case "warning":
      return themeColors.warning;
    case "danger":
      return themeColors.danger;
    case "info":
      return themeColors.info;
    case "light":
      return themeColors.light;
    case "dark":
      return themeColors.dark;

    default:
      // Puedes manejar el caso por defecto según tus necesidades
      return {
        primary: "#007BFF", // Azul principal
        textOnPrimary: "#FFFFFF", // Texto sobre fondo azul
        cardBackground: "#B3D9FF", // Fondo de tarjeta (Card Background)
        buttonBackground: "#001F3F", // Fondo de botón
        buttonText: "#FFFFFF", // Texto de botón
        inputBackground: "red",
        inputText: "",
      };
  }
};
