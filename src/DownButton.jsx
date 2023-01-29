import * as React from "react";

const SvgComponent = (onClick) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      fill="#000"
      className=""
      viewBox="0 0 20 30"
    >
      <path
        fill="white"
        stroke="#B052F2"
        strokeLinecap="round"
        strokeLinejoin=""
        strokeWidth="1.5"
        d="M12 3a9 9 0 109 9 9 9 0 00-9-9zm0 4v5m.69 4.63l2.14-3.13a1 1 0 00-.69-1.5H9.86a1 1 0 00-.69 1.5l2.14 3.12a.82.82 0 001.38.01z"
      ></path>
    </svg>
  );
}

export default SvgComponent;
