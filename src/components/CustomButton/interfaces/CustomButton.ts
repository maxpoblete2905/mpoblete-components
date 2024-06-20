import { ReactIcons } from "../../../icon/types";
import { BorderRadius, ButtonSize, ButtonTheme } from "../types";
import { DownloadExcelOptions } from "./DownloadExcelOptions";

export interface CustomButtonProps {
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: ButtonSize;
  theme?: ButtonTheme;
  borderRadius?: BorderRadius;
  icon?: ReactIcons;
  textUtilities?: "capitalize" | "lowercase" | "uppercase";
  downloadExcel?: DownloadExcelOptions;
}
