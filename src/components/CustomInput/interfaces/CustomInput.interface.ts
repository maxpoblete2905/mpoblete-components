import { ReactIconsName } from "@icon/types/reactIcons.type";
import { ChangeEvent } from "react";

export interface CustomInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon?: ReactIconsName;
  error?: boolean;
}
