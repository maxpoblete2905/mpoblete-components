import  { ReactNode } from 'react'; 

import { BsTrash, BsPlus, BsPencil } from "react-icons/bs";
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from "react-icons/ri";
import { AiOutlineSave, AiOutlineClose } from "react-icons/ai";

interface IconLibrary {
  [key: string]: ReactNode; 
}

const icons: IconLibrary = {
  trash: <BsTrash />,
  plus: <BsPlus />,
  edit: <BsPencil />,
  checkboxEmpty: <RiCheckboxBlankCircleLine />,
  checkboxFilled: <RiCheckboxCircleFill />,

  save: <AiOutlineSave />,
  close: <AiOutlineClose />,
};

export const getIconByName = (name: string): ReactNode | null => {
  if (icons.hasOwnProperty(name)) {
    return icons[name];
  } else {
    console.error(`Icono '${name}' no encontrado.`);
    return null;
  }
}
