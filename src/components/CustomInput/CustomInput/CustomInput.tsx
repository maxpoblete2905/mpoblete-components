import "../css/index";
import { CustomInputProps } from "../interfaces";
import { getReactIcon } from "@icon/getIcons";

export const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  placeholder="agrega un valor",
  icon
}) => {
  const IconComponent = getReactIcon(icon!);

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
