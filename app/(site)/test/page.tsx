"use client";
import { Popover } from "@/components/UI";
import React from "react";

const Test = () => {
  return (
    <div className="h-[100vh] w-full">
      <div className="mt-27 h-full w-full p-28">
        <Popover popoverContent="This is a beautiful popover, show some love!">
          <button>click me</button>
        </Popover>
      </div>
    </div>
  );
};

export default Test;
