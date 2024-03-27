import * as XLSX from "xlsx";

type DataItem = {
  [key: string]: any;
};

export const handleDownload = <T extends DataItem>(
  data: T[],
  fileName: string
) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, `${fileName}.xlsx`);
};
