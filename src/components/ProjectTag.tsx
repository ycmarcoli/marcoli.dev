import React from "react";

interface ProjectTagProps {
  dark?: boolean;
  children: React.ReactNode;
}

export default function ProjectTag({ dark = false, children }: ProjectTagProps) {
  return (
    <span className={`${dark ? "bg-gray-300": "bg-gray-100"} rounded-full px-3 py-1 text-sm font-bold text-gray-700`}>
      {children}
    </span>
  );
}
