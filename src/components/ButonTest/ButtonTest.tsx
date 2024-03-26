import React from "react";
import { ButtonProps } from "./ButtonPros";
import { generateButtonClasses } from "./util/getClass";
import { getIconByName } from "../../icon/handlerIcon";

export const ButtonTest: React.FC<ButtonProps> = (props) => {
  const classes = generateButtonClasses(props);
  const { icon } = props;
  const data = icon ? getIconByName(icon) : null; // Modificado para manejar el caso en que no haya icono
  return <button className={classes}> {data} {props.label} </button>; // Corregido para renderizar el icono correctamente
};