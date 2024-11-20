"use client";
import { Toast } from "@/components/UI";
import React, { useState } from "react";

const Test = () => {
  const [showToast, setShowToast] = useState(true);
  return (
    <div className="h-full w-full bg-slate-100">
      <div className="mt-30">
        {showToast && (
          <Toast
            message="This is a toast message!"
            variant="info"
            position="top-right"
            duration={2000}
            onClose={() => {
              setShowToast(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Test;
