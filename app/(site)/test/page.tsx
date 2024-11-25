"use client";
import SpeedDial from "@/components/UI/SpeedDial";
import React from "react";
import { FaHome } from "react-icons/fa";
import { FaGear, FaPage4 } from "react-icons/fa6";

const Test = () => {
  const buttons = [
    {
      icon: <FaHome />,
      label: "Home",
      action: () => console.log("Home clicked"),
    },
    {
      icon: <FaGear />,
      label: "Settings",
      action: () => console.log("Settings clicked"),
    },
    {
      icon: <FaPage4 />,
      label: "Pages",
      action: () => console.log("Pages clicked"),
    },
  ];
  return (
    <div className="h-[100vh] w-full">
      <div className="mt-27 h-full w-full p-8">
        <SpeedDial buttons={buttons} />
      </div>
    </div>
  );
};

export default Test;
