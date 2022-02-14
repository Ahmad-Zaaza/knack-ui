import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import { useIsomorphicLayoutEffect } from "../../../utils/useIsomorphicLayoutEffect";
import { IBaseDialogProps } from "./BaseDialog";

const useBaseDialogUtils = ({
  isOpen,
  onClose,

  setActive
}: Pick<IBaseDialogProps, "isOpen" | "onClose"> & {
  setActive: Dispatch<SetStateAction<boolean>>;
}) => {
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
  useIsomorphicLayoutEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setActive(isOpen);
      }, 10);
    }
  }, [isOpen]);
};

export default useBaseDialogUtils;
