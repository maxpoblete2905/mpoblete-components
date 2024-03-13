import React from "react";
import { Button } from "react-bootstrap";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  paginate,
}) => {
  return (
    <div>
      {totalPages > 1 && (
        <ul className="pagination">
          {[...Array(totalPages)].map((_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <Button className="page-link" onClick={() => paginate(index + 1)}>
                {index + 1}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Pagination;
