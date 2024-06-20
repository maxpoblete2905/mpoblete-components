import { ExcelRecords } from "../types";
import { Columns } from "./Columns";

export interface DownloadExcelOptions {
  fileName: string;
  active: boolean;
  data: ExcelRecords[];
  columns: Columns[];
}
