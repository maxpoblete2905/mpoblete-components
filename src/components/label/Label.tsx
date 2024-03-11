import "./label.css";
import "../grid/grid.css";

interface Props {
  /**
   * Text to display
   */
  label: string;

  /**
   * all label caps latter
   */
  allCaps?: boolean;

  /**
   * color label text
   */
  color?: "primary" | "secondary" | "dark";

  /**
   * fontColor
   */

  fontColor?: string;

  /**
   * color background
   */
  backgroundColor?: string;

  text: "small" | "medium" | "large" | "extra-large";
}

export const Label = ({
  label,
  allCaps = false,
  color = "primary",

  text,
}: Props) => {
  return (
    <span className={`label teme-${color} text-${text}`}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
