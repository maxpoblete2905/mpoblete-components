import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { TableData } from "./Mantainer";

interface EditFormProps<T> {
  show: boolean;
  onHide: () => void;
  selectedItem: T; // Tipo del elemento seleccionado
  onSave: (editedItem: T) => void; // Función para guardar cambios
}

const EditForm = <T extends TableData>({
  show,
  onHide,
  selectedItem,
  onSave,
}: EditFormProps<T>) => {
  const [editedItem, setEditedItem] = useState<T>(selectedItem);

  const handleSave = () => {
    onSave(editedItem);
    onHide();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Elemento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {Object.keys(selectedItem).map((key) => (
            <Form.Group controlId={key} key={key}>
              <Form.Label>{key}</Form.Label>
              <Form.Control
                type="text"
                name={key}
                value={editedItem[key as keyof T]?.toString()}
                onChange={handleInputChange}
              />
            </Form.Group>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditForm;
