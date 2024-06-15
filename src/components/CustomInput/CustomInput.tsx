import { getReactIconByName } from "@icon/index";
import { CustomInputProps } from "./interfaces";
import "./scss/index.scss";
import React from "react";

export const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  placeholder="agrega un valor",
  icon
}) => {
  const IconComponent = getReactIconByName(icon!);

  return (
    <div className="input-container">
      {IconComponent && <IconComponent className="icon"/>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Escribe algo..."}
      />
    </div>
  );
};
