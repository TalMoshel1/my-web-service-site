import React from "react";

const SvgBottomShapedCorner: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 10"
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: "100vw",
        border: "none",
        display: "block",
        zIndex:4
      }}
    >
      <path stroke="rgba(249, 248, 247, 1)" stroke-width="1" fill="rgba(249, 248, 247, 1)" d="M0 6 v0 6 h50 Z" />
      <path
        stroke="rgba(249, 248, 247, 1)"
        stroke-width="1"
        fill="rgba(249, 248, 247, 1)"
        d="M100 6 v0 6 h-50 Z"
      />
    </svg>
  );
};

export default SvgBottomShapedCorner;
