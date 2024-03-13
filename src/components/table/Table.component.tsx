import React, { useEffect, useState } from "react";
import { Form, Table, Button } from "react-bootstrap";
import { BsTrash, BsPencilSquare, BsPlus } from "react-icons/bs";
import Pagination from "./Paginacion";
import EditForm from "./EditForm";
import DeleteForm from "./DeleteForm";
import Filter from "./Filter";

export interface TableData {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  creationDate: string;
}

export interface TableProps {
  data: TableData[];
}

export const TableComponent: React.FC<TableProps> = ({ data }) => {
  const [filter, setFilter] = useState<string>("");
  const [selectedItemIds, setSelectedItemIds] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [dataList, setDataList] = useState<TableData[]>([]);
  const [dataPerPage] = useState<number>(10);
  const [selectedItem, setSelectedItem] = useState<TableData | null>(null);

  useEffect(() => {
    setDataList(data);
  }, [data]);

  const toDate = (dateString: string): Date => {
    return new Date(dateString);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    setCurrentPage(1); // Resetear la página al cambiar el filtro
  };

  const handleDeleteClick = (id: number) => {
    setSelectedItemIds([id]);
    setShowDeleteModal(true);
  };

  const handleDeleteMultiple = () => {
    // Lógica para eliminar los elementos seleccionados
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    // Lógica para eliminar el elemento
    const newArray = dataList.filter(
      (item) => !selectedItemIds.includes(item.id)
    );

    setDataList(newArray);
    setShowDeleteModal(false);
    setSelectedItemIds([]);
  };

  const handleEditClick = (table: TableData) => {
    if (table) {
      setSelectedItem(table);
      setShowEditModal(true);
    }
  };

  const handleEditSave = (editedItem: TableData) => {
    // Lógica para guardar cambios en el elemento
    const updatedDataList = dataList.map((item) =>
      item.id === editedItem.id ? editedItem : item
    );
    setDataList(updatedDataList);
  };

  const handleAddClick = () => {
    console.log("Agregar nuevo elemento");
  };

  const handleCheckboxChange = (id: number) => {
    const selectedIndex = selectedItemIds.indexOf(id);
    if (selectedIndex === -1) {
      setSelectedItemIds([...selectedItemIds, id]);
    } else {
      setSelectedItemIds([
        ...selectedItemIds.slice(0, selectedIndex),
        ...selectedItemIds.slice(selectedIndex + 1),
      ]);
    }
  };

  // Ordenar los datos por fecha de creación en orden ascendente
  const sortedData = dataList
    .filter(
      (item) =>
        item.nombre.toLowerCase().includes(filter.toLowerCase()) ||
        item.apellido.toLowerCase().includes(filter.toLowerCase()) ||
        item.email.toLowerCase().includes(filter.toLowerCase())
    )
    .sort(
      (a, b) =>
        toDate(a.creationDate).getTime() - toDate(b.creationDate).getTime()
    );

  // Paginación
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = sortedData.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <Filter value={filter} onChange={setFilter} />
      <Button
        variant="danger"
        className="mr-2"
        onClick={handleDeleteMultiple}
        disabled={selectedItemIds.length === 0}
      >
        <BsTrash />
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Seleccionar</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Ingreso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row) => (
            <tr key={row.id}>
              <td>
                <Form.Check
                  type="checkbox"
                  checked={selectedItemIds.includes(row.id)}
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </td>
              <td>{row.nombre}</td>
              <td>{row.apellido}</td>
              <td>{row.email}</td>
              <td>{row.creationDate}</td>
              <td>
                <Button
                  variant="danger"
                  className="mr-2"
                  onClick={() => handleDeleteClick(row.id)}
                >
                  <BsTrash />
                </Button>
                <Button
                  variant="primary"
                  className="mr-2"
                  onClick={() => handleEditClick(row)}
                >
                  <BsPencilSquare />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        totalPages={Math.ceil(sortedData.length / dataPerPage)}
        currentPage={currentPage}
        paginate={paginate}
      />
      <Button variant="success" onClick={handleAddClick}>
        <BsPlus />
      </Button>

      <DeleteForm
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        onDelete={handleConfirmDelete}
      />

      <EditForm
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        selectedItem={selectedItem}
        onSave={handleEditSave}
      />
    </div>
  );
};
