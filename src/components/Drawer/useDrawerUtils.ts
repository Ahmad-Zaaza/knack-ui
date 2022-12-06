import { useCallback, useEffect } from "react";
import { IDrawerProps } from "./Drawer";

const useDrawerUtils = ({
  isOpen,
  onClose
}: Pick<IDrawerProps, "isOpen" | "onClose"> & {}) => {
  // 🔒 Close on Esc press
  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (isOpen && (event.key === "Esc" || event.key === "Escape")) {
        onClose();
      }
    },
    [isOpen, onClose]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [handleEsc]);
};

export default useDrawerUtils;
