import { Columns } from "../interfaces/Columns";
import { ExcelRecords } from "../types";

/**
 * Maps and modifies records based on the specified columns.
 * @param records - An array of Excel format records to be modified.
 * @param columns - An array of columns that defines how records should be modified.
 * @returns A new array of modified records based on the specified columns.
 */
export function mapRecords(
  records: ExcelRecords[],
  columns: Columns[]
): ExcelRecords[] {
  return records.map((record) => {
    const modifiedRecord: ExcelRecords = { ...record }; // Copy the record object

    // Iterate through columns to update values
    columns.forEach((column) => {
      // Check if modifiedRecord has the property with column.id
      if (Object.prototype.hasOwnProperty.call(modifiedRecord, column.id)) {
        // Assign the property value to the new column.label key
        modifiedRecord[column.label] = modifiedRecord[column.id];
        delete modifiedRecord[column.id]; // Delete the old key if necessary
      }
    });

    return modifiedRecord;
  });
}
