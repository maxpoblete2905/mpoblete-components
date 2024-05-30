import { IconName } from "@icon/icon.type";
import { ChangeEvent } from "react";

export interface CustomInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon?: IconName;
  error?: boolean;
}
