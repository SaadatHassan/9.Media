import React from "react";

export const Skeleton = ({ count }) => {
  const skeletonItems = Array.from({ length: count }, (_, index) => (
    <div key={index} className="bg-gray-300 h-4 w-1/2"></div>
  ));

  return (
    <div className="animate-pulse flex flex-col space-y-4 p-3">
      {skeletonItems}
    </div>
  );
};
