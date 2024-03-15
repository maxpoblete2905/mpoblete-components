import { Form, Table, Button } from "react-bootstrap";
import { BsTrash, BsPencilSquare, BsFileTextFill } from "react-icons/bs";
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
  selectedItemIds: string[];
  handleCheckboxChange: (id: string) => void;
  handleEditClick: (row: T) => void;
  handleDeleteClick: (id: string) => void;
}

export const TableComponent = <T extends TableData>({
  data,
  columns,
  selectedItemIds,
  handleCheckboxChange,
  handleEditClick,
  handleDeleteClick,
}: TableProps<T>) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const modifiedData = data.map((item) => ({
    ...item,
    creationDate: formatDate(item.creationDate),
  }));

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th
            style={{
              width: "auto",
              textAlign: "center",
            }}
          >
            Check
          </th>
          {columns.map((column) => (
            <th
              key={column.key}
              style={{
                width: column.width ?? "auto",
                textAlign: column.align ?? "center",
              }}
            >
              {column.label}
            </th>
          ))}
          <th
            style={{
              width: "20PX",
              textAlign: "center",
            }}
          >
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {modifiedData.map((row) => (
          <tr key={row.id}>
            <td
              style={{
                textAlign: "center",
                verticalAlign: "middle",
                width: "20px",
              }}
            >
              <div style={{ display: "inline-block" }}>
                <Form.Check
                  style={{ margin: "auto" }}
                  type="checkbox"
                  checked={selectedItemIds.includes(row.id)}
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </div>
            </td>
            {columns.map((column) => (
              <td key={column.label}>
                {row[column.key as keyof T]?.toString()}
              </td>
            ))}
            <td
              style={{
                textAlign: "center",
                verticalAlign: "middle",
                width: "20%",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="danger"
                  className="ml-2"
                  style={{ marginRight: "5px" }}
                  onClick={() => handleDeleteClick(row.id)}
                >
                  <BsTrash />
                </Button>
                <Button
                  variant="secondary"
                  className="ml-2"
                  style={{ marginRight: "5px" }}
                  onClick={() => alert("crear vista ver registro")}
                >
                  <BsFileTextFill />
                </Button>
                <Button
                  variant="primary"
                  className="ml-2"
                  onClick={() => handleEditClick(row)}
                >
                  <BsPencilSquare />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
