import React from "react";
import Button from "./Button";

export default function SearchBar({ keyword, handleInput, handleSearch }) {
  return (
    <div className="mb-5 mt-10 flex items-center justify-center">
      <input
        type="text"
        placeholder="Search Images"
        onChange={handleInput}
        value={keyword}
        className="mx-3 w-48 rounded-full bg-blue-50 px-4 py-2 transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
      <Button
        type="search"
        onClick={() => {
          handleSearch(keyword);
        }}
        disabled={keyword.trim() === ""}
      >
        Search
      </Button>
    </div>
  );
}
