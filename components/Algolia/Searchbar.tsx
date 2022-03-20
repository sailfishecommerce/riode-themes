import React from "react";

export default function Searchbar() {
  return (
    <div className="searchbar flex flex-col">
      <input
        type="text"
        className="border border-blue-700 rounded-lg ring-blue-700"
      />
    </div>
  );
}
