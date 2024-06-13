import { ReactIcons } from "@icon/types";
import { ExcelDatatoDownload } from ".";
import {
  BorderRadiusType,
  ButtonColorType,
  ButtonSizeType,
  ButtonType,
} from "../types";

export interface CustomButtonProps {
  label: string;
  type?: ButtonType;
  disabled?: boolean;
  size?: ButtonSizeType;
  color?: ButtonColorType;
  icon?: ReactIcons;
  borderRedius?: BorderRadiusType;
  data?: ExcelDatatoDownload[];
  header?: string[];
  onClick?: () => void;
}
