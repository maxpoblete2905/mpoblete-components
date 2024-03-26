import { Theme } from "../../types/theme";

export interface ButtonComponentProps {
  onClickEvent?: () => void;
  theme?: Theme;
  size?: "lg" | "sm";
  label?: string;
  type?: "button" | "reset" | "submit" | undefined;
  AllCaps?: boolean;
  customTextColor?: string;
  isneon: boolean;
}

export const ButtonComponent = ({
  label = "button actions",
  onClickEvent,
  type = "submit",
  AllCaps = false,
  isneon = false,
}: ButtonComponentProps) => {
  const data = AllCaps ? label.toUpperCase() : label;

  return (
    <button
      className={`button-component ${isneon ? 'neon' : ''}`}
      onClick={() => onClickEvent && onClickEvent()}
      type={type}
    >
      {data}
    </button>
  );
};
