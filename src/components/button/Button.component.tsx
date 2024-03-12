// ButtonComponent.tsx
import { Button } from "react-bootstrap";
import { Theme } from "../../types/theme";

export interface ButtonComponentProps {
  onClickEvent?: () => void;
  theme?: Theme;
  size?: "lg" | "sm";
  label?: string;
  type?: "button" | "reset" | "submit" | undefined;
  AllCaps?: boolean;
  customTextColor?: string;
}

export const ButtonComponent = ({
  theme = "primary",
  size = "sm",
  label = "button actions",
  onClickEvent,
  type = "submit",
  AllCaps = false,
  customTextColor,
}: ButtonComponentProps) => {
  const buttonStyle = {
    color: customTextColor,
  };

  return (
    <Button
      onClick={() => onClickEvent && onClickEvent()}
      type={type}
      variant={theme}
      size={size}
      style={buttonStyle}
    >
      {AllCaps ? label.toUpperCase() : label}
    </Button>
  );
};
