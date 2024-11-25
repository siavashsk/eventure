"use client";
import { Progressbar } from "@/components/UI";
import React from "react";

const Test = () => {
  return (
    <div className="h-[100vh] w-full">
      <div className="mt-27 h-full w-full p-8">
        <Progressbar label="Task Progress" percentage={40} />
      </div>
    </div>
  );
};

export default Test;
