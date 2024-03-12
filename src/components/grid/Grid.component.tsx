import React, { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";

interface GridComponentProps {
  children: ReactNode;
  col: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  color: "primary" | "secondary" | "dark";
}

export const GridComponent: React.FC<GridComponentProps> = ({
  children,
  col,
  color,
}) => {
  return (
    <Container
      style={{ padding: "20px", borderRadius: 10 }}
      className={`theme-${color}`}
    >
      <Row>
        <Col className={`theme-secondary`} xs={12} md={col}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};
