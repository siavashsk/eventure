"use client";
import { Badge, Popover } from "@/components/UI";
import Accordion from "@/components/UI/Accordion";
import React from "react";

const Test = () => {
  const accordionItems = [
    {
      title: "What is Material Tailwind?",
      content:
        "Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.",
    },
    {
      title: "How to use Material Tailwind?",
      content:
        "You can use Material Tailwind by importing its components into your Tailwind CSS project.",
    },
    {
      title: "What can I do with Material Tailwind?",
      content:
        "Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.",
    },
  ];
  return (
    <div className="h-[100vh] w-full">
      <div className="mt-27 flex h-full w-full flex-col gap-4 p-20">
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
};

export default Test;
