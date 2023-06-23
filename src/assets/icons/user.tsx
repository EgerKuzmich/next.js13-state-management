import React from "react";

function UserIcon({ filled = false }: { filled?: boolean }) {
  const fill = filled ? "#4b00cc" : "currentColor";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <g>
        <g fill={`${fill}`}>
          <path d="M256 238.4c105.5 0 191.1 85.5 191.1 191.1v55.4c0 15-12.1 27.1-27.1 27.1H92c-15 0-27.1-12.1-27.1-27.1v-55.4c0-105.6 85.6-191.1 191.1-191.1z"></path>
          <circle cx="256" cy="104.9" r="104.9"></circle>
        </g>
      </g>
    </svg>
  );
}

export default UserIcon;
