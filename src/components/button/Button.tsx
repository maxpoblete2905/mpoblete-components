// ButtonComponent.tsx
import "./button.css";
import "../grid/grid.css";

export interface ButtonComponentProps {
  onClickTest?: () => void;
  color: "primary" | "secondary" | "dark";
}

export const ButtonComponent = ({ color }: ButtonComponentProps) => {
  return (
    <button className={`button button-${color}`} type="submit">
      Submit
    </button>
  );
};
