import React from "react";

import Logo from "@/components/Logo";
import Searchbar from "@/components/Algolia/Searchbar";

export default function () {
  return (
    <div className="w-full">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <Searchbar />
      </div>
    </div>
  );
}
