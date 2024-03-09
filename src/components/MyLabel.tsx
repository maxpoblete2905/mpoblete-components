import "./MyLabel.css";

interface Props {
  /**
   * Text to display
   */
  label: string;

  /**
   * Label size
   */
  size?: "normal" | "h1" | "h2" | "h3";

  /**
   * all label caps latter
   */
  allCaps?: boolean;

  /**
   * color label text
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";

  /**
   * fontColor
   */

  fontColor?: string;

  /**
   * color background
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color = "text-primary",
  fontColor = "",
  backgroundColor = "",
}: Props) => {
  return (
    <span
      className={`${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
