import React from "react";
import Button from "./Button";

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
  displayImages,
}) {
  if (displayImages === 0) return;
  return (
    <div className="my-10 flex items-center justify-center">
      <Button
        type="page"
        onClick={() => {
          setCurrentPage((prev) => Math.max(prev - 1, 1));
        }}
        disabled={currentPage === 1}
      >
        Prev
      </Button>
      <span className="px-3">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        type="page"
        onClick={() => {
          setCurrentPage((prev) => Math.min(prev + 1, totalPages));
        }}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
}
