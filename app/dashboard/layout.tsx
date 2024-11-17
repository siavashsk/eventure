import Sidebar from "@/components/Dashboard/Sidebar";
import React from "react";
import '../globals.css';
import DashboardPage from "./page";

const layout = () => {
  return (
    <div>
      <Sidebar>
        <DashboardPage />
      </Sidebar>
    </div>
  );
};

export default layout;
