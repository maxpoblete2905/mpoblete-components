import { getReactIconByName } from "@icon/index";
import { CustomButtonProps } from "@CustomButton/interfaces";
import { capitalizeLabel } from "@CustomButton/utils";
import { borderRadiusClass, themeClass, sizeClass } from "@CustomButton/theme";

export const CustomButton: React.FC<CustomButtonProps> = ({
  label = "Button",
  onClick,
  type = "button",
  disabled = false,
  size = "medium",
  theme = "primary",
  borderRedius = "sm",
  icon,
  capitalized = false,
  iconSize = 22,
}) => {
  const IconComponent = getReactIconByName(icon!);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        btn 
        ${sizeClass[size]} 
        ${themeClass[theme]} 
        ${borderRadiusClass[borderRedius]}
      `}
    >
      {IconComponent && <IconComponent size={iconSize} className="me-2" />}
      {capitalizeLabel(label, capitalized)}
    </button>
  );
};
