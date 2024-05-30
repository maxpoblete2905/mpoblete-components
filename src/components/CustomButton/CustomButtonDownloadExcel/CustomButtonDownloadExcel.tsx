import React from "react";
import "../scss/index.scss";
import { CustomButtonProps } from "../interfaces";
import { handleDownloadExcel } from "../util";
import { getReactIconByName } from "@icon/index";

export const CustomButtonDownloadExcel: React.FC<CustomButtonProps> = ({
  label,
  type = "button",
  disabled = false,
  size = "medium",
  color = "default",
  borderRedius = "sm",
  icon,
  data,
  header,
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

  const handleClick = () => {
    handleDownloadExcel(data!, header!, "exported_data");
  };

  return (
    <button
      className={classButton}
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      {IconComponent && <IconComponent className={classIcon} />}
      {label}
    </button>
  );
};
