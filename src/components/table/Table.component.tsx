import { Form, Table, Button } from "react-bootstrap";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { TableData } from "./Mantainer";

export type TableColumn = {
  key: string;
  label: string;
  width?: string;
  align?: "left" | "right" | "center" | "justify";
};

export interface TableProps<T> {
  data: T[];
  columns: TableColumn[];
  selectedItemIds: number[];
  handleCheckboxChange: (id: number) => void;
  handleEditClick: (row: T) => void;
  handleDeleteClick: (id: number) => void;
}

export const TableComponent = <T extends TableData>({
  data,
  columns,
  selectedItemIds,
  handleCheckboxChange,
  handleEditClick,
  handleDeleteClick,
}: TableProps<T>) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>check</th>
          {columns.map((column) => (
            <th
              key={column.key}
              style={{
                width: column.width ?? "auto",
                textAlign: column.align ?? "left",
              }}
            >
              {column.label}
            </th>
          ))}
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>
              <Form.Check
                type="checkbox"
                checked={selectedItemIds.includes(row.id)}
                onChange={() => handleCheckboxChange(row.id)}
              />
            </td>
            {columns.map((column) => (
              <td key={column.key}>{row[column.key as keyof T]?.toString()}</td>
            ))}
            <td>
              <Button
                variant="danger"
                className="ml-2"
                onClick={() => handleDeleteClick(row.id)}
              >
                <BsTrash />
              </Button>
              <Button
                variant="primary"
                className="ml-2"
                onClick={() => handleEditClick(row)}
              >
                <BsPencilSquare />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
