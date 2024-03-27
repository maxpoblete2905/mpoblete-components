import React, { useState, useEffect } from "react";
import { TableData } from "./Mantainer";
import { InputComponent } from "../../components/input/Input";
import { ModalComponent } from "../../components/modal/Modal";

function deleteKeys<T>(obj: T, keysToDelete: (keyof T)[]): T {
  const newObj = { ...obj }; // Creamos una copia del objeto original
  keysToDelete.forEach((key) => {
    delete newObj[key]; // Eliminamos la clave del objeto copiado
  });
  return newObj;
}

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
  const [editedItem, setEditedItem] = useState<T | null>(null);

  // Actualizar el estado de editedItem cuando selectedItem cambia
  useEffect(() => {
    setEditedItem(selectedItem);
  }, [selectedItem]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (editedItem) {
      const { name, value } = event.target;
      setEditedItem({ ...editedItem, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editedItem) {
      console.log("send edit", editedItem);
      onSave(editedItem);
      setEditedItem(null);
      onHide();
    }
  };

  return (
    <ModalComponent
      show={show}
      onHide={onHide}
      children={
        editedItem &&
        Object.keys(deleteKeys(editedItem, ["id", "creationDate"])).map(
          (key) => (
            <>{key}</>
            // <CustomInput
            //   key={key}
            //   id={key}
            //   label={key}
            //   type={"text"}
            //   value={editedItem[key as keyof T]?.toString() || ""}
            //   placeholder={key}
            //   theme={"primary"}
            //   isneon={false}
            //   errors={false}
            //   handleChange={handleInputChange}
            // />
          )
        )
      }
      onSubmit={handleSubmit}
      title={"Editar Elemento"}
    />
  );
};

export default EditForm;
