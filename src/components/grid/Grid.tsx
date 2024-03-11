import React, { ReactNode } from "react";
import "./grid.css"; // Asegúrate de que la ruta del archivo CSS sea correcta

interface GridComponentProps {
  children: ReactNode;
  col: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
  color: "primary" | "secondary" | "dark";
}

export const GridComponent: React.FC<GridComponentProps> = ({
  children,
  col = 12,
  color,
}) => {
  return (
    <div className={`row`}>
      <div className={`col-${col} teme-${color}`}>{children}</div>
    </div>
  );
};
