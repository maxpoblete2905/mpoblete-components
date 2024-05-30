import React from "react";
import "../css/index";
import { searchIconByName } from "@icon/handlerIcon";
import { CustomButtonProps } from "../interfaces";

export const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  size = "medium",
  color = "default",
  borderRedius = "sm",
  icon,
}) => {
  const classButton = `custom-button 
    ${size} 
    ${color} 
    ${borderRedius} 
  `;

  const classIcon = `button-icon 
    ${label ? "label-is" : "label-none"}
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classButton}
    >
      {icon && <span className={classIcon}>{searchIconByName(icon!)}</span>}
      {label}
    </button>
  );
};
