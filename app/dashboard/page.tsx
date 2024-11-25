"use client";
import { Input, Timeline } from "@/components/UI";
import React from "react";
import { FaBell, FaBoxOpen, FaCheckCircle } from "react-icons/fa";

const DashboardPage = () => {
  const timelineItems = [
    {
      icon: FaBell,
      iconBgColor: "bg-gray-900/10",
      iconTextColor: "text-gray-900",
      title: "$2400, Design changes",
      description: "22 DEC 7:20 PM",
      date: "22 DEC 2023",
    },
    {
      icon: FaBoxOpen,
      iconBgColor: "bg-red-500/10",
      iconTextColor: "text-red-500",
      title: "New order #1832412",
      description: "21 DEC 11 PM",
      date: "21 DEC 2023",
    },
    {
      icon: FaCheckCircle,
      iconBgColor: "bg-green-500/10",
      iconTextColor: "text-green-500",
      title: "Payment completed for order #4395133",
      description: "20 DEC 2:20 AM",
      date: "20 DEC 2023",
    },
    {
      icon: FaBell,
      iconBgColor: "bg-gray-900/10",
      iconTextColor: "text-gray-900",
      title: "$2400, Design changes",
      description: "22 DEC 7:20 PM",
      date: "22 DEC 2023",
    },
    {
      icon: FaBoxOpen,
      iconBgColor: "bg-red-500/10",
      iconTextColor: "text-red-500",
      title: "New order #1832412",
      description: "21 DEC 11 PM",
      date: "21 DEC 2023",
    },
    {
      icon: FaCheckCircle,
      iconBgColor: "bg-green-500/10",
      iconTextColor: "text-green-500",
      title: "Payment completed for order #4395133",
      description: "20 DEC 2:20 AM",
      date: "20 DEC 2023",
    },
  ];

  return (
    <div>
      <Timeline items={timelineItems} />
    </div>
  );
};

export default DashboardPage;
