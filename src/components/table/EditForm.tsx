import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

interface EditFormProps {
  show: boolean;
  onHide: () => void;
  selectedItem: any; // Tipo del elemento seleccionado
  onSave: (editedItem: any) => void; // Función para guardar cambios
}

const EditForm: React.FC<EditFormProps> = ({
  show,
  onHide,
  selectedItem,
  onSave,
}) => {
  const [editedItem, setEditedItem] = useState(selectedItem);

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
        <Form>{/* Inputs para editar propiedades del elemento */}</Form>
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
