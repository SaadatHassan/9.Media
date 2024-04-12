import React from "react";
import classNames from "classnames";

// basic skeleton
// export const Skeleton = ({ count }) => {
//   const skeletonItems = Array.from({ length: count }, (_, index) => (
//     <div key={index} className="bg-gray-300 h-4 w-1/2"></div>
//   ));

//   return (
//     <div className="animate-pulse flex flex-col space-y-4 p-3">
//       {skeletonItems}
//     </div>
//   );
// };

// with shimmer effect
export const Skeleton = ({ count, className }) => {
  const outerClassNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "mb-2.5",
    className
  );

  const innerClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200"
  );

  const skeletonItems = Array(count)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassNames}>
          <div className={innerClassNames} />
        </div>
      );
    });

  return skeletonItems;
};
