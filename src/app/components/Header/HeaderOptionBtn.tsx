import React from "react";

interface MenuItemProps {
  text: string;
  onClick?: () => void; // Optional click handler
}

function HeaderOptionBtn({ text, onClick }: MenuItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative underline-button text-[20px]"
    >
      {text}
    </button>
  );
}

export default HeaderOptionBtn;
