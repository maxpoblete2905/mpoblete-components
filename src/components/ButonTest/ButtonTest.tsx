import React from "react";
import { ButtonProps } from "./ButtonPros";
import { getIconByName } from "../../icon/handlerIcon";

export const ButtonTest: React.FC<ButtonProps> = ({
  color = 'black-solid',
  fontSize = '20',
  fontWeight = 'normal',
  margin = 'md',
  padding = 'md',
  borderRadius = 'md',
  boxShadow = 'none',
  hoverBackground,
  backgroundColor = 'blue-solid',
  hoverColor,
  label = 'Guardar registro',
  hoverScale = 100,
  allCaps = false,
  icon,
  onClick
}) => {

const classes = `
  custom-button color-${color}
  background-${backgroundColor} 
  font-size-${fontSize} 
  font-weight-${fontWeight} 
  margin-${margin} 
  padding-${padding}
  border-radius-${borderRadius} 
  box-shadow-${boxShadow} 
  hover-background-color-${hoverBackground ? hoverBackground : backgroundColor}
  hover-color-${hoverColor ? hoverColor : color}
  hover-scale-${hoverScale}
`;
  const iconData = icon ? getIconByName(icon) : null; 
  
  const labelData = allCaps ? label.toUpperCase() : label;

  return (
    <button 
      className={classes}
      onClick={onClick}
    > 
       {iconData ? iconData : null}
       {label ? <span className="label">{labelData}</span> : null }
    </button>
  ); 
};
