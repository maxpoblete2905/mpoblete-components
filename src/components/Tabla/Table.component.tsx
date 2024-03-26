import { BsTrash, BsPencilSquare, BsFileTextFill } from "react-icons/bs";
import "./table.css"; // Importa tu hoja de estilos CSS externa
import { TableData } from "../../apps/Mantainer/Mantainer";

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

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const TableComponent = <T extends TableData>({
  data,
  columns,
  selectedItemIds,
  handleCheckboxChange,
  handleEditClick,
  handleDeleteClick,
}: TableProps<T>) => {
  const modifiedData = data.map((item) => ({
    ...item,
    creationDate: formatDate(item.creationDate),
  }));

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="header-cell">Check</th>
          {columns.map((column) => (
            <th
              key={column.key}
              className="header-cell"
            >
              {column.label}
            </th>
          ))}
          <th className="header-cell">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {modifiedData.map((row) => (
          <tr key={row.id}>
            <td className="body-cell">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={selectedItemIds.includes(row.id)}
                  onChange={() => handleCheckboxChange(row.id)}
                />

              </div>
            </td>
            {columns.map((column) => (
              <td key={column.label} className="body-cell">
                {row[column.key as keyof T]?.toString()}
              </td>
            ))}
            <td className="body-cell">
              <div className="button-container">
                <button
                  className="action-button delete-button"
                  onClick={() => handleDeleteClick(row.id)}
                >
                  <BsTrash />
                </button>
                <button
                  className="action-button view-button"
                  onClick={() => alert("crear vista ver registro")}
                >
                  <BsFileTextFill />
                </button>
                <button
                  className="action-button edit-button"
                  onClick={() => handleEditClick(row)}
                >
                  <BsPencilSquare />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

