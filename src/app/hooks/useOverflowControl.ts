// useOverflowControl.ts
import { useEffect } from "react";

export default function useOverflowControl(openModal: boolean) {
  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "auto";

    // Cleanup on unmount or when openModal changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);
}
