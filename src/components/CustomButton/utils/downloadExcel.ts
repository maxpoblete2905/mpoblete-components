import * as XLSX from "xlsx";
import { ExcelDatatoDownload } from "../interfaces";

export const handleDownloadExcel = (
  data: ExcelDatatoDownload[],
  header: string[],
  fileName: string
) => {
  const worksheet = XLSX.utils.json_to_sheet(data, { header });
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, `${fileName}.xlsx`);
};
