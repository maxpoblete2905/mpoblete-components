import { ReactIcons } from "../../../icon/types";
import {
  BorderRadius,
  ButtonSize,
  ButtonTheme,
  ExcelRecords,
  IconSize,
} from "../types";
export interface CustomButtonProps {
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: ButtonSize;
  theme?: ButtonTheme;
  borderRedius?: BorderRadius;
  icon?: ReactIcons;
  capitalized?: boolean;
  data?: ExcelRecords[];
  header?: string[];
  iconSize?: IconSize;
}
