import * as XLSX from "xlsx";
import './excelDownloadButton.css'; // Import your CSS file

interface ExcelDownloadButtonProps<T> {
  data: T[];
  fileName: string;
}

export const ExcelDownloadButton = <T extends object>({
  data,
  fileName,
}: ExcelDownloadButtonProps<T>) => {
  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  return <button className="excel-download-button" onClick={handleDownload}>Excel</button>;
};
