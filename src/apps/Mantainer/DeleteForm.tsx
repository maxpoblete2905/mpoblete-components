import React from "react";
import { Button, Modal } from "react-bootstrap";

interface DeleteFormProps {
  show: boolean;
  onHide: () => void;
  onDelete: () => void;
}

const DeleteForm: React.FC<DeleteFormProps> = ({ show, onHide, onDelete }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar Eliminación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        ¿Estás seguro de que deseas eliminar este elemento?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={onDelete}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteForm;
