import React from "react";
import './modal.css'
interface EditFormProps {
  show: boolean;
  title: string;
  onHide: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export const ModalComponent = ({
  show,
  onHide,
  children,
  onSubmit,
  title,
}: EditFormProps) => {
  return (
    <div className={`custom-modal ${show ? "show" : ""}`} style={{ display: show ? "block" : "none" }}>
      <div className="custom-modal-dialog">
        <div className="custom-modal-content">
          <form onSubmit={onSubmit}>
            <div className="custom-modal-header">
              <h5 className="custom-modal-title">{title}</h5>
              <button type="button" className="custom-close" onClick={onHide}>
                <span>&times;</span>
              </button>
            </div>
            <div className="custom-modal-body">{children}</div>
            <div className="custom-modal-footer">
              <button type="button" className="custom-btn custom-btn-secondary" onClick={onHide}>
                Cancelar
              </button>
              <button type="submit" className="custom-btn custom-btn-primary">
                {`${title.split(" ")[0]}`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
