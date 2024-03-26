import React, { ReactNode } from 'react'; // Asegúrate de importar ReactNode

// Importaciones de iconos
import { BsTrash, BsPlus, BsPencil } from "react-icons/bs";
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from "react-icons/ri";
import { AiOutlineSave, AiOutlineClose } from "react-icons/ai";

// Definición de interfaz para los iconos
interface IconLibrary {
  [key: string]: ReactNode; // Cambiar IconType a ReactNode
}

const icons: IconLibrary = {
  // Iconos CRUD
  trash: <BsTrash />,
  plus: <BsPlus />,
  edit: <BsPencil />,
  checkboxEmpty: <RiCheckboxBlankCircleLine />,
  checkboxFilled: <RiCheckboxCircleFill />,

  // Otras funcionalidades y sus iconos asociados
  save: <AiOutlineSave />,
  close: <AiOutlineClose />,
};

// Función para obtener el icono según el nombre
export const getIconByName = (name: string): ReactNode | null => {
  // Verificar si el nombre está en el objeto icons
  if (icons.hasOwnProperty(name)) {
    return icons[name];
  } else {
    // Si el nombre no se encuentra, devolver null o manejar el caso de error según sea necesario
    console.error(`Icono '${name}' no encontrado.`);
    return null;
  }
}
