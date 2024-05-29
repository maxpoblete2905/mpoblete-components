import React from "react";
import * as XLSX from "xlsx";
import { CustomButtonProps, DataItem } from "./CustomButtonDownloadExcelProps";


const handleDownload = (data: DataItem[], header: string[], fileName: string) => {
  const worksheet = XLSX.utils.json_to_sheet(data, { header });
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, `${fileName}.xlsx`);
};

const CustomButtonDownloadExcel: React.FC<CustomButtonProps> = ({ label, data, header }) => {
  const handleClick = () => {
    handleDownload(data, header, "exported_data");
  };

  return (
    <button onClick={handleClick}>
      {label}
    </button>
  );
};

export default CustomButtonDownloadExcel;
