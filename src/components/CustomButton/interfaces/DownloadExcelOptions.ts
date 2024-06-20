import { ExcelRecords } from "../types";
import { Columns } from "./Columns";

export interface DownloadExcelOptions {
  fileName: string;
  active: true;
  data: ExcelRecords[];
  columns: Columns[];
}
