/* eslint-disable no-param-reassign */
import { Dispatch, RefObject, SetStateAction, useCallback } from "react";
import useEventInEffect from "../../utils/useEventInEffect";
import { useIsomorphicLayoutEffect } from "../../utils/useIsomorphicLayoutEffect";
import { IPopoverProps } from "./Popover";

const usePopoverUtils = ({
  isOpen,
  onClose,
  ref,
  setActive
}: Pick<IPopoverProps, "isOpen" | "onClose" | "parentRect"> & {
  setActive: Dispatch<SetStateAction<boolean>>;
  ref: RefObject<HTMLDivElement | null>;
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

  // 🔒 Close on Click outside the popover
  const handleClickOutside = useCallback((event: any) => {
    console.log(ref);
    if (ref && ref.current?.contains(event.target)) {
      onClose();
    }
  }, []);

  useEventInEffect("keydown", handleEsc);
  useEventInEffect("mousedown", handleClickOutside);

  useIsomorphicLayoutEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setActive(isOpen);
      }, 10);
    }
  }, [isOpen]);
};

export default usePopoverUtils;
