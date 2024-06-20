import "../styles/index.scss";
import { getReactIconByName } from "../../../icon";
import { CustomButtonProps } from "../interfaces";
import { borderRadiusClass, themeClass, sizeClass } from "../theme";
import { formatTextUtilities } from "../utils/formatTextUtilities";
import { handleDownloadExcel } from "../utils";
import { DownloadExcelOptions } from "../interfaces/DownloadExcelOptions";

export const CustomButton: React.FC<CustomButtonProps> = ({
  label = "Button",
  onClick,
  icon,
  type = "button",
  disabled = false,
  size = "medium",
  theme = "primary",
  borderRadius = "sm",
  textUtilities = "capitalize",
  downloadExcel,
}) => {
  const IconComponent = getReactIconByName(icon!);

  const handleClick = (downloadExcel: DownloadExcelOptions) => {
    handleDownloadExcel(downloadExcel);
  };

  const handleClickButton = () => {
    if (downloadExcel?.active) {
      handleClick(downloadExcel);
    } else {
      onClick?.();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClickButton}
      disabled={disabled}
      data-testid="custom-button"
      className={`
        btn-button
        btn 
        ${sizeClass[size]} 
        ${themeClass[theme]} 
        ${borderRadiusClass[borderRadius]}
      `}
    >
      {IconComponent && <IconComponent className="icon"/>}
      {label && formatTextUtilities(textUtilities, label)}
    </button>
  );
};
