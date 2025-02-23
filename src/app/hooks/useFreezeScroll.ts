import { useEffect } from "react";

export function useFreezeScroll(isOpen: boolean) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup when unmounting
    };
  }, [isOpen]);
}