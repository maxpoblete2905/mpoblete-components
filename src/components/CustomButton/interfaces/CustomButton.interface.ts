import { DataItem } from ".";

import {
  BorderRadiusType,
  ButtonColorType,
  ButtonIconsType,
  ButtonSizeType,
  ButtonType,
} from "../types";

export interface CustomButtonProps {
  label: string;
  type?: ButtonType;
  disabled?: boolean;
  size?: ButtonSizeType;
  color?: ButtonColorType;
  icon?: ButtonIconsType;
  borderRedius?: BorderRadiusType;
  data?: DataItem[];
  header?: string[];
  onClick?: () => void;
}
