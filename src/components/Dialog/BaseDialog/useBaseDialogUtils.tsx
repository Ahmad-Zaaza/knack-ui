import { useCallback, useEffect } from "react";
import { getScrollbarWidth } from "../../../utils/helpers";
import { IBaseDialogProps } from "./BaseDialog";

const useBaseDialogUtils = ({
  isOpen,
  onClose,
  bodyScrollLocked,
  replaceScrollBar,
  defaultBodyOverflow
}: Pick<
  IBaseDialogProps,
  | "isOpen"
  | "onClose"
  | "replaceScrollBar"
  | "bodyScrollLocked"
  | "defaultBodyOverflow"
>) => {
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
  useEffect(() => {
    if (bodyScrollLocked) {
      if (replaceScrollBar) {
        document.body.style.borderRight = isOpen
          ? `solid ${getScrollbarWidth()}px ${"#eeeeee"}`
          : "none";
      }

      document.body.style.overflow = isOpen
        ? "hidden"
        : defaultBodyOverflow || "visible";
    }
  }, [isOpen, defaultBodyOverflow, replaceScrollBar, bodyScrollLocked]);
};

export default useBaseDialogUtils;
