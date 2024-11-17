"use client";
import "../globals.css";
import React from "react";
import DashboardPage from "./page";
import Header from "@/components/Dashboard/Header ";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";

const layout = () => {
  return (
    <div className="bg-[#333]">
      <Sidebar>
        <Header>
          <DashboardPage />
        </Header>
      </Sidebar>
    </div>
  );
};

export default layout;
