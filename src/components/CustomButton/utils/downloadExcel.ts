import * as XLSX from "xlsx";
import { mapRecords } from "./mapRecords";
import { DownloadExcelOptions } from "../interfaces/DownloadExcelOptions";

/**
 * Handles the download of Excel file based on provided data and header columns.
 * @param data - An array of ExcelRecords containing the data to be exported.
 * @param header - An array of Columns defining the structure and headers of the Excel sheet.
 * @param fileName - The name of the Excel file to be downloaded (without extension).
 */
export const handleDownloadExcel = (
  record: DownloadExcelOptions,
) => {
  // Convert data to worksheet format using header mapping
  const worksheet = XLSX.utils.json_to_sheet(mapRecords(record.data, record.columns));

  // Create a new Excel workbook
  const workbook = XLSX.utils.book_new();

  // Append the worksheet to the workbook with Sheet1 as the sheet name
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // Write the workbook to an Excel file and trigger download with specified filename
  XLSX.writeFile(workbook, `${record.fileName}.xlsx`);
};
