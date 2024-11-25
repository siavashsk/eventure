"use client";
import { Popover, SearchInput } from "@/components/UI";
import React from "react";

const Test = () => {
  return (
    <div className="h-[100vh] w-full">
      <div className="mt-27 h-full w-full p-28">
        <SearchInput
          placeholder="Search for items..."
          onSearch={(query) => console.log("Searching for:", query)}
          inputClassName="custom-input-class"
          buttonClassName="custom-button-class"
        />
      </div>
    </div>
  );
};

export default Test;
