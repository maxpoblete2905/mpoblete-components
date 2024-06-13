import { ReactIcons } from "@icon/types";
import { ChangeEvent } from "react";

export interface CustomInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon?: ReactIcons;
  error?: boolean;
}
