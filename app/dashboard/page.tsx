import { Box } from "@/components/UI";
import { Checkbox } from "@/components/UI/Checkbox";
import { LabelChip } from "@/components/UI/Chip/LabelChip";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="mt-8">
      <Checkbox />
      <LabelChip variant="white">hi</LabelChip>
    </div>
  );
};

export default DashboardPage;
