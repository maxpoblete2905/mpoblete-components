import React, { useState } from "react";
import { TableData } from "./Mantainer";
import { CustomInput } from "../input/Input.component";
import { ModalComponent } from "./Modal";

function removeValuesFromArray(
  array: string[],
  valuesToRemove: string[]
): string[] {
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
  const [createItem, setCreateItem] = useState<T | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (createItem) {
      const { name, value } = event.target;
      setCreateItem({ ...createItem, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (createItem) {
      onSave(createItem);
      onHide();
    }
  };

  return (
    <ModalComponent
      show={show}
      onHide={onHide}
      children={
        createItem &&
        Object.keys(removeValuesFromArray(inputs, ["id", "creationDate"])).map(
          (key) => (
            <CustomInput
              key={key}
              id={key}
              label={key}
              type={"text"}
              value={createItem[key as keyof T]?.toString() || ""}
              placeholder={key}
              theme={"primary"}
              isneon={false}
              errors={false}
              handleChange={handleInputChange}
            />
          )
        )
      }
      onSubmit={handleSubmit}
    />
  );
};
