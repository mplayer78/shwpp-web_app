import React from "react";
export function UserLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      fill="none"
      viewBox="0 0 17 16"
      {...props}
    >
      <circle
        r="4.45"
        fill="#0A0A0A"
        transform="matrix(-1 0 0 1 8.587 4.492)"
      ></circle>
      <path
        fill="#010101"
        fillRule="evenodd"
        d="M16.534 15.9H.64v0c0-3.11 3.558-5.631 7.946-5.631 4.39 0 7.947 2.521 7.947 5.631z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
