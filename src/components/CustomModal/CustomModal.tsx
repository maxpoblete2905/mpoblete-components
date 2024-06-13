import React from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          ×
        </span>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Modal;
