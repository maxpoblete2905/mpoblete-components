import React from "react";
import "../css/CustomButton.css";
import "../css/CustomButtonIcon.css";
import "../css/CustomButtonColor.css";
import "../css/CustomButtonBorderRadius.css";
import * as XLSX from "xlsx";
import { searchIconByName } from "../../../icon/handlerIcon";
import { CustomButtonProps, DataItem } from "../interfaces";

const handleDownload = (
  data: DataItem[],
  header: string[],
  fileName: string
) => {
  const worksheet = XLSX.utils.json_to_sheet(data, { header });
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, `${fileName}.xlsx`);
};

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
    handleDownload(data!, header!, "exported_data");
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
