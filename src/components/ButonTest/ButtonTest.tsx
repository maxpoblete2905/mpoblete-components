import React from "react";
import { ButtonProps } from "./ButtonPros";
import { generateButtonClasses } from "./util/getClass";
import { getIconByName } from "../../icon/handlerIcon";

export const ButtonTest: React.FC<ButtonProps> = (props) => {
  const classes = generateButtonClasses(props);
  const { icon, label } = props;
  const iconData = icon ? getIconByName(icon) : null; 
  return (
    <button className={classes}> 
       {iconData}
        <span className="label">{label}</span>
    </button>
  ); 
};