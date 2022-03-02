/* eslint-disable no-param-reassign */
import { Dispatch, MutableRefObject, SetStateAction, useCallback } from "react";
import useClickOutside from "../../utils/useClickOutside";
import useEventInEffect from "../../utils/useEventInEffect";
import { useIsomorphicLayoutEffect } from "../../utils/useIsomorphicLayoutEffect";
import { IPopoverProps } from "./Popover";

const usePopoverUtils = ({
  isOpen,
  onClose,
  ref,
  parentRef,
  setActive
}: Pick<IPopoverProps, "isOpen" | "onClose" | "parentRef"> & {
  setActive: Dispatch<SetStateAction<boolean>>;
  ref: MutableRefObject<null>;
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
  useClickOutside(ref, onClose, parentRef);

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
