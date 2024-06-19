import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss'
import { getReactIconByName } from "../../../icon";
import { capitalizeLabel, handleDownloadExcel } from "../utils";
import { CustomButtonProps } from "../interfaces";
import { borderRadiusClass, themeClass, sizeClass } from "../theme";

export const CustomButtonDownloadExcel: React.FC<CustomButtonProps> = ({
  label = "Export Excel",
  type = "button",
  disabled = false,
  size = "medium",
  theme = "default",
  borderRedius = "sm",
  icon = "FcInternal",
  data,
  header,
  iconSize = "22",
  capitalized,
}) => {
  const IconComponent = getReactIconByName(icon!);

  const handleClick = () => {
    handleDownloadExcel(data!, header!, "exported_data");
  };

  return (
    <button
      onClick={handleClick}
      type={type}
      disabled={disabled}
      className={`
        btn 
        ${sizeClass[size]} 
        ${themeClass[theme]} 
        ${borderRadiusClass[borderRedius]}
    `}
    >
      {IconComponent && <IconComponent size={iconSize} className={label && icon ? "me-2" : ''} />}
      {capitalizeLabel(label!, capitalized!)}
    </button>
  );
};
