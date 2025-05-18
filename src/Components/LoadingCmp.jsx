import React from "react";

const LoadingCmp = ({ type }) => {
  const loadingType = type;
  return (
    <div className="flex justify-center items-center h-full align-middle">
      {loadingType === "Spiral" ? (
        // Default values shown
        <l-spiral size="75" speed="0.9" color="white"></l-spiral>
      ) : (
        <l-quantum size="75" speed="2.0" color="white"></l-quantum>
      )}
    </div>
  );
};

export default LoadingCmp;
