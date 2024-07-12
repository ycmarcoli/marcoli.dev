import React from "react";

interface MainContainerProps {
  children: React.ReactNode;
}

function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="min-h-screen h-full w-full bg-gray-100 dark:bg-zinc-900 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-24 lg:pt-36">
        <div className="max-w-3xl mx-auto">{children}</div>
      </div>
    </div>
  );
}

export default MainContainer;
