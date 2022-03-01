/* eslint-disable no-param-reassign */
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect
} from "react";
import useEventInEffect from "../../utils/useEventInEffect";
import { useIsomorphicLayoutEffect } from "../../utils/useIsomorphicLayoutEffect";
import { IPopoverProps } from "./Popover";

const usePopoverUtils = ({
  isOpen,
  onClose,
  ref,
  position,
  setActive
}: Pick<IPopoverProps, "isOpen" | "onClose" | "position"> & {
  setActive: Dispatch<SetStateAction<boolean>>;
  ref: RefObject<HTMLDivElement>;
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
    if (ref.current && !ref.current.contains(event.target)) {
      onClose();
    }
  }, []);
  useEventInEffect("keydown", handleEsc);
  useEventInEffect("mousedown", handleClickOutside);
  // useEffect(() => {
  //   window.addEventListener("keydown", handleEsc);
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //     window.removeEventListener("keydown", handleEsc);
  //   };
  // }, [handleEsc, handleClickOutside]);

  useEffect(() => {
    if (ref.current && position) {
      console.log({ position });
      if (position.top) ref.current.style.top = `${position.top}px`;
      if (position.right) ref.current.style.right = `${position.right}px`;
      if (position.bottom) ref.current.style.bottom = `${position.bottom}px`;
      if (position.left) ref.current.style.left = `${position.left}px`;
    }
  }, [position]);
  useIsomorphicLayoutEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setActive(isOpen);
      }, 10);
    }
  }, [isOpen]);
};

export default usePopoverUtils;
