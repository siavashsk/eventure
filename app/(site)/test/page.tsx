"use client";
import { Badge, Popover } from "@/components/UI";
import React from "react";

const Test = () => {
  return (
    <div className="h-[100vh] w-full">
      <div className="mt-27 flex h-full w-full flex-col gap-4 p-20">
        <Badge count={100} size="lg">
          <button className="bg-green-500 p-4 text-white">Inbox</button>
        </Badge>
        <Badge count={10} color="bg-blue-500">
          <button className="bg-gray-500 p-4 text-white">Messages</button>
        </Badge>
        <Badge count={5}>
          <button className="bg-blue-500 p-4 text-white">Notifications</button>
        </Badge>
      </div>
    </div>
  );
};

export default Test;
