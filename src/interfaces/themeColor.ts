export interface ThemeInterface {
  primary: string;
  textOnPrimary: string;
  cardBackground: string;
  buttonBackground: string;
  buttonText: string;
  inputBackground: string;
  inputText: string;
}

export interface ThemeColors {
  primary: ThemeInterface;
  secondary: ThemeInterface;
  success: ThemeInterface;
  warning: ThemeInterface;
  danger: ThemeInterface;
  info: ThemeInterface;
  light: ThemeInterface;
  dark: ThemeInterface;
}
