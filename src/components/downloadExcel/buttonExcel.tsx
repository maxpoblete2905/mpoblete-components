import { Button } from "react-bootstrap";
import * as XLSX from "xlsx";

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

  return <Button onClick={handleDownload}>Excel</Button>;
};
