"use client";
import { Skeleton } from "@/components/UI";
import React from "react";

const Test = () => {
  return (
    <div className="h-[100vh] w-full">
      <div className="mt-27 h-full w-full p-8">
        <Skeleton type="video" className="mb-4" />
        <Skeleton type="image" className="shadow-lg" />
        <Skeleton type="title" className="rounded-lg" />
        <Skeleton type="desc" className="bg-gray-300" />
        <Skeleton type="icon" className="border border-gray-400" />
      </div>
    </div>
  );
};

export default Test;
