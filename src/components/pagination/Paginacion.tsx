import React from "react";
import { Button } from "react-bootstrap";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (currentPage <= 3) {
      for (let i = 1; i <= 5; i++) {
        pageNumbers.push(i);
      }
    } else if (currentPage > totalPages - 2) {
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        pageNumbers.push(i);
      }
    }
  }

  return (
    <div>
      {totalPages > 1 && (
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <Button
              className="page-link"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Anterior
            </Button>
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${currentPage === number ? "active" : ""}`}
            >
              <Button className="page-link" onClick={() => paginate(number)}>
                {number}
              </Button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <Button
              className="page-link"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Siguiente
            </Button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Pagination;
