import React from "react";

export default function Searchbar() {
  return (
    <div className="searchbar flex flex-col w-3/6">
      <input
        type="text"
        className="border-2 border-blue-700 rounded-lg ring-blue-700 h-10 px-2"
        placeholder="Search in"
      />
    </div>
  );
}
