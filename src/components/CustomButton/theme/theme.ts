import { ButtonSize, BorderRadius, ButtonTheme } from "../types";

export const sizeClass: Record<ButtonSize, string> = {
  small: "btn-small",
  medium: "btn-medium",
  large: "btn-large",
};

export const themeClass: Record<ButtonTheme, string> = {
  default: "btn-secondary",
  primary: "btn-primary",
  secondary: "btn-secondary",
  success: "btn-success",
  danger: "btn-danger",
  warning: "btn-warning",
  info: "btn-info",
  light: "btn-light",
  dark: "btn-dark",
};

export const borderRadiusClass: Record<BorderRadius, string> = {
  none: "rounded-none",
  xxs: "rounded-xxs",
  xs: "rounded-xs",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  xxl: "rounded-xxl",
};
