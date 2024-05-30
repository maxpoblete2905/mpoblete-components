import React from "react";
import "../scss/index.scss";
import { CustomButtonProps } from "../interfaces";
import { getReactIconByName } from "@icon/index";

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

  const IconComponent = getReactIconByName(icon!);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classButton}
    >
      {IconComponent && <IconComponent className={classIcon} />}
      {label}
    </button>
  );
};
