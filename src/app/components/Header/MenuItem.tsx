import React from "react";

interface MenuItemProps {
  text: string;
  className?: string; // Optional className for custom styles
  disabled?: boolean; // Optional disabled state
  onClick?: () => void; // Optional click handler
}

function MenuItem({ text, className, disabled, onClick }: MenuItemProps) {
  return (
    <li role="menuitem" className={`hover:bg-gray-100 ${className}`}>
      <button
        type="button"
        disabled={disabled}
        onClick={onClick}
        className={disabled ? "text-[#bbbbbb]" : ""}
      >
        {text}
      </button>
    </li>
  );
}

export default MenuItem;
