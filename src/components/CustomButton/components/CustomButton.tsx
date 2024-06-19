import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss'
import { getReactIconByName } from "../../../icon";
import { CustomButtonProps } from "../interfaces";
import { capitalizeLabel } from "../utils";
import { borderRadiusClass, themeClass, sizeClass } from "../theme";

export const CustomButton: React.FC<CustomButtonProps> = ({
  label,
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

  console.log(borderRadiusClass[borderRedius])
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      data-testid="custom-button"
      className={`
        btn 
        ${sizeClass[size]} 
        ${themeClass[theme]} 
        ${borderRadiusClass[borderRedius]}
      `}
    >
      {IconComponent && <IconComponent size={iconSize} className={label && icon ? "me-2" : ''} />}
      {capitalizeLabel(label!, capitalized)}
    </button>
  );
};
