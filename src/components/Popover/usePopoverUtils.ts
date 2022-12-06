import { Dispatch, SetStateAction, useCallback } from "react";
import useEventInEffect from "../../utils/useEventInEffect";
import { useIsomorphicLayoutEffect } from "../../utils/useIsomorphicLayoutEffect";
import { IPopoverProps } from "./Popover";

const usePopoverUtils = ({
  isOpen,
  onClose,

  setActive
}: Pick<IPopoverProps, "isOpen" | "onClose"> & {
  setActive: Dispatch<SetStateAction<boolean>>;
}) => {
  // 🔒 Close on Esc press
  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Esc" || event.key === "Escape") {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEventInEffect("keydown", handleEsc);

  useIsomorphicLayoutEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setActive(isOpen);
      }, 10);
    }
  }, [isOpen]);
};

export default usePopoverUtils;
