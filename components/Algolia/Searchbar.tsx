import React from "react";

export default function Searchbar() {
  return (
    <div className="searchbar flex flex-col w-1/2">
      <input
        type="text"
        className="border-2 border-blue-700 rounded-lg ring-blue-700 h-12 px-4"
        placeholder="Search in ..."
      />
    </div>
  );
}
