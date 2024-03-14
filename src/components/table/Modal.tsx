import { Button, Modal, Form } from "react-bootstrap";

interface EditFormProps {
  show: boolean;
  title: string;
  onHide: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode; // Cambiado a tipo React.ReactNode
}

export const ModalComponent = ({
  show,
  onHide,
  children,
  onSubmit,
  title,
}: EditFormProps) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Form onSubmit={onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>{title} </Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            {`${title.split(" ")[0]}`}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
