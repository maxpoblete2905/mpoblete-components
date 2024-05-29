import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { TableColumn, TableComponent } from "../../components/tabla/Table.component";
import { CreateForm } from "./CreateForm";
import { v4 as uuidv4 } from "uuid";
import Pagination from "../../components/pagination/Paginacion";
import EditForm from "./EditForm";
import DeleteForm from "./DeleteForm";
import Filter from "./Filter";
import { ButtonTest } from "../../components/button/CustomButton";
import { handleDownload } from "../../util/handlerDownloadExcel";

function eliminarEspacios(cadena: string): string {
  return cadena.replace(/\s+/g, "");
}

export interface TableData {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  creationDate: string;
}

const inputs = ["id", "nombre", "apellido", "email", "creationDate"];

export interface MantainerProps {
  data: TableData[];
  columns: TableColumn[];
  emitOnSubmitCreate: (data: TableData) => boolean;
  emitOnSubmitDelete: (data: string[]) => void;
  emitOnSubmitEdit: (data: TableData) => void;
}

const initialItem: TableData = {
  id: "0",
  nombre: "",
  apellido: "",
  email: "",
  creationDate: "",
};

export const MantainerComponent: React.FC<MantainerProps> = ({
  data,
  columns,
  emitOnSubmitCreate,
  emitOnSubmitDelete,
  emitOnSubmitEdit,
}) => {
  const [filter, setFilter] = useState<string[]>(["", "", ""]);

  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [dataList, setDataList] = useState<TableData[]>([]);
  const [dataPerPage] = useState<number>(10);
  const [selectedItem, setSelectedItem] = useState<TableData>(initialItem);

  useEffect(() => {
    setDataList(data);
  }, [data]);

  function removeAccents(str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  useEffect(() => {
    function filtrarPorFechaYNombre(lista: TableData[]) {

      return lista.filter((item) => {
        const fechaCreacion = new Date(item.creationDate);
        const fechaDesde = filter[1] ? new Date(filter[1]) : null;
        const fechaHasta = filter[2] ? new Date(filter[2]) : null;
        const nombreLowerCase = removeAccents(
          eliminarEspacios(filter[0]).toLowerCase()
        );

        const cumpleNombre =
          !filter[0] ||
          item.nombre.toLowerCase().includes(removeAccents(nombreLowerCase));
        const cumpleFecha =
          !fechaDesde ||
          !fechaHasta ||
          (fechaCreacion >= fechaDesde && fechaCreacion <= fechaHasta);

        return cumpleNombre && cumpleFecha;
      });
    }

    const newData = filtrarPorFechaYNombre(data);
    console.log(newData)
    setDataList(newData);
  }, [data, filter]);

  const toDateFuntion = (dateString: string): Date => {
    return new Date(dateString);
  };

  const sortedData = useMemo(() => {
    return dataList.sort(
      (a, b) =>
        toDateFuntion(b.creationDate).getTime() -
        toDateFuntion(a.creationDate).getTime()
    );
  }, [dataList]);

  const handleDeleteClick = useCallback((id: string) => {
    setSelectedItemIds([id]);
    setShowDeleteModal(true);
  }, []);

  const handleDeleteMultiple = useCallback(() => {
    setShowDeleteModal(true);
  }, []);

  const handleConfirmDelete = useCallback(() => {
    const newArray = dataList.filter(
      (item) => !selectedItemIds.includes(item.id)
    );

    setDataList(newArray);
    emitOnSubmitDelete(selectedItemIds);
    setShowDeleteModal(false);
    setSelectedItemIds([]);
  }, [dataList, selectedItemIds, emitOnSubmitDelete]);

  const handleEditClick = useCallback((table: TableData) => {
    if (table) {
      setSelectedItem(table);
      setShowEditModal(true);
    }
  }, []);

  const handleEditSave = useCallback(
    (editedItem: TableData) => {
      const updatedDataList = dataList.map((item) =>
        item.id === editedItem.id ? editedItem : item
      );
      setDataList(updatedDataList);
      emitOnSubmitEdit(editedItem);
      console.log("se edita un elemento");
    },
    [dataList, emitOnSubmitEdit]
  );

  const handleCreateSave = useCallback(
    (editedItem: TableData) => {
      const isSaved = emitOnSubmitCreate(editedItem);
      console.log(isSaved);
      if (isSaved) {
        const currentDate = new Date();
        editedItem.creationDate =
          currentDate.toISOString().split(".")[0] + ".000Z";
        editedItem.id = uuidv4();
        setDataList((prevDataList) => [editedItem, ...prevDataList]);
        console.log("nuevo elemento");
      } else {
        console.log("error en el servidor");
      }
    },
    [emitOnSubmitCreate]
  );

  const handleAddClick = useCallback(() => {
    setShowCreateModal(true);
  }, []);

  const handleCheckboxChange = useCallback(
    (id: string) => {
      const selectedIndex = selectedItemIds.indexOf(id);
      if (selectedIndex === -1) {
        setSelectedItemIds([...selectedItemIds, id]);
      } else {
        setSelectedItemIds([
          ...selectedItemIds.slice(0, selectedIndex),
          ...selectedItemIds.slice(selectedIndex + 1),
        ]);
      }
    },
    [selectedItemIds]
  );

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = sortedData.slice(indexOfFirstData, indexOfLastData);

  const paginate = useCallback(
    (pageNumber: number) => setCurrentPage(pageNumber),
    []
  );

  return (
    <div>
      <Card>
        <Card.Header>
          <Row className="align-items-center justify-content-between">
            <Col md={10}>
              <Filter value={filter} onChange={setFilter} />
            </Col>

            <Col md={2}>
              <ButtonTest
                backgroundColor="red-solid"
                color="white-light"
                icon="trash"
                label=""
                onClick={handleDeleteMultiple}
                disabled={selectedItemIds.length === 0}
                margin='xs'
              />
              
              <ButtonTest
                backgroundColor="green-solid"
                color="white-light"
                icon="save"
                label=""
                onClick={handleAddClick}
                margin='xs'
              />

              <ButtonTest
                backgroundColor="green-solid"
                color="white-light"
                icon='arrowDown'
                label=""
                onClick={()=> handleDownload(currentData, "mi-data")}
                margin='xs'
              />
             </Col>
          </Row>
        </Card.Header>

        <Card.Body style={{ padding: 0 }}>
          <TableComponent
            data={currentData}
            handleCheckboxChange={handleCheckboxChange}
            handleEditClick={handleEditClick}
            selectedItemIds={selectedItemIds}
            handleDeleteClick={handleDeleteClick}
            columns={columns}
          />
        </Card.Body>
        <Card.Footer style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            totalPages={Math.ceil(sortedData.length / dataPerPage)}
            currentPage={currentPage}
            paginate={paginate}
          />
        </Card.Footer>
      </Card>

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
      <CreateForm
        show={showCreateModal}
        onHide={() => setShowCreateModal(false)}
        onSave={handleCreateSave}
        inputs={inputs}
      />

    </div>
  );
};

export default MantainerComponent;
