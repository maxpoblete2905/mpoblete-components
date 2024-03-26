import React, { useState } from "react";
import { TableData } from "./Mantainer";
import { CustomInput } from "../../components/input/Input.component";
import { ModalComponent } from "../../components/modal/Modal";

function removeItem(array: string[], valuesToRemove: string[]): string[] {
  return array.filter((item) => !valuesToRemove.includes(item));
}

interface CreateFormProps<T> {
  show: boolean;
  onHide: () => void;
  onSave: (editedItem: T) => void; // Función para guardar cambios
  inputs: string[];
}

export const CreateForm = <T extends TableData>({
  show,
  onHide,
  onSave,
  inputs,
}: CreateFormProps<T>) => {
  const [createItem, setCreateItem] = useState<T>({} as T); // Inicializa createItem como un objeto vacío

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCreateItem({ ...createItem, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(createItem);
    onHide();
  };

  return (
    <ModalComponent
      title={"Crear Elemento"}
      show={show}
      onHide={onHide}
      children={
        inputs &&
        removeItem(inputs, ["id", "creationDate"]).map((key) => (
          <CustomInput
            key={key}
            id={key}
            label={key}
            type={"text"}
            value={createItem[key as keyof T]?.toString() || ""}
            placeholder={`ingrege ${key}`}
            theme={"primary"}
            isneon={false}
            errors={false}
            handleChange={handleInputChange}
          />
        ))
      }
      onSubmit={handleSubmit}
    />
  );
};

/**
 *       children={
        inputs &&
        removeItem(inputs, ["id", "creationDate"]).map((key) => (
          <CustomInput
            key={key}
            id={key}
            label={key}
            type={"text"}
            value={createItem[key as keyof T]?.toString() || ""}
            placeholder={`ingrege ${key}`}
            theme={"primary"}
            isneon={false}
            errors={false}
            handleChange={handleInputChange}
          />
        ))
      }
 */