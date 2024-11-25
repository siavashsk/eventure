"use client";
import { Tabs } from "@/components/UI";
import React, { useState } from "react";
import { FaGear, FaUser } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";

const Test = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: <RxDashboard /> },
    { id: "profile", label: "Profile", icon: <FaUser /> },
    { id: "settings", label: "Settings", icon: <FaGear /> },
  ];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <div className="h-[100vh] w-full">
      <div className="mt-27 h-full w-full p-8">
        <div className="p-4">
          <Tabs
            tabs={tabs.map((tab) => ({
              ...tab,
              isActive: tab.id === activeTab,
            }))}
            onTabClick={handleTabClick}
          />
          <div className="mt-4">
            <p>Active Tab: {activeTab}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
