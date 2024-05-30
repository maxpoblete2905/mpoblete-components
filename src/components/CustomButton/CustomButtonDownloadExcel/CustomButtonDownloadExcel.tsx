import React from "react";
import "../css/index";
import { searchIconByName } from "@icon/handlerIcon";
import { CustomButtonProps } from "../interfaces";
import { handleDownloadExcel } from "../util";

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
      {icon && <span className={classIcon}>{searchIconByName(icon!)}</span>}
      {label}
    </button>
  );
};
