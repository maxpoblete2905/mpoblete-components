import { IconsType } from "@types-data/icon";
import {
  BorderRadiusType,
  ButtonColorType,
  ButtonSizeType,
  ButtonType,
} from "../types";
import { DataItem } from "./DataItem";

export interface CustomButtonProps {
  label: string;
  type?: ButtonType;
  disabled?: boolean;
  size?: ButtonSizeType;
  color?: ButtonColorType;
  icon?: IconsType;
  borderRedius?: BorderRadiusType;
  data?: DataItem[];
  header?: string[];
  onClick?: () => void;
}
