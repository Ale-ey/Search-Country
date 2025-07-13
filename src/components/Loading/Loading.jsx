// components/Spinner.tsx
import React from "react";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-white dark:bg-gray-900 transition-theme">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};
