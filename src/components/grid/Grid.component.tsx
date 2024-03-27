import React, { ReactNode } from "react";

interface GridComponentProps {
  children: ReactNode;
  col: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  color: "primary" | "secondary" | "dark";
}

export const GridComponent: React.FC<GridComponentProps> = ({
  children,
  color,
}) => {
  const containerStyle = {
    padding: "20px",
    borderRadius: 10,
  };

  const columnStyle = {
    flexGrow: 1,
  };

  return (
    <div
      style={{
        ...containerStyle,
        backgroundColor: color === "primary" ? "blue" : color === "secondary" ? "green" : "black", // Example background colors, change as needed
      }}
    >
      <div className="row">
        <div
          className="col"
          style={{
            ...columnStyle,
            backgroundColor: color === "secondary" ? "green" : "inherit", // Example background colors, change as needed
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
