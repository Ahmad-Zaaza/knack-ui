/* eslint-disable no-param-reassign */
import { useMemo, CSSProperties, useState, useCallback, useRef } from "react";
import composeRefs from "@seznam/compose-react-refs";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { Portal } from "../Portal";
import usePopoverUtils from "./usePopoverUtils";
import { Box } from "..";
// import FocusLock from "../../utils/FocusLock";

const clsx = classnames.bind(styles);

export type PopoverAnimations = "fade" | "fade-up";

export interface IPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  parentRect?: DOMRect | null;
  disableFocusLock?: boolean;
  popoverClasses?: string;
  popoverStyles?: CSSProperties;
  animationType?: PopoverAnimations;
}

const Popover: React.FC<IPopoverProps> = ({
  isOpen,
  children,
  disableFocusLock: _,
  onClose,
  parentRect,
  animationType = "fade",
  popoverClasses: className,
  popoverStyles
}) => {
  console.log({ parentRect });
  const [active, setActive] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const internalRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node || !parentRect) return;
      if (parentRect.top) node.style.top = `${parentRect.top}px`;
      if (parentRect.left) node.style.left = `${parentRect.left}px`;
      // if (parentRect.right) node.style.right = `${parentRect.right}px`;
      // if (parentRect.bottom) node.style.bottom = `${parentRect.bottom}px`;
    },
    [parentRect]
  );

  usePopoverUtils({
    isOpen,
    onClose,
    setActive,
    ref: popoverRef,
    parentRect
  });

  const popoverMenuClasses = useMemo(
    () =>
      clsx(
        "popover-menu",
        {
          [`${animationType}--active`]: isOpen && active,
          [`${animationType}--initial`]: true
        },
        className
      ),
    [className, isOpen, active]
  );
  const popoverClasses = useMemo(() => clsx("popover", className), [className]);
  const onTransitionEnd = () => {
    setActive(isOpen);
  };

  if (!isOpen && !active) return null;
  return (
    <Portal>
      {/* <FocusLock open={isOpen} focusLock={!!disableFocusLock}> */}
      <div
        style={popoverStyles}
        onTransitionEnd={onTransitionEnd}
        ref={composeRefs(internalRef, popoverRef)}
        role="presentation"
        tabIndex={-1}
        className={popoverClasses}
      >
        <Box as="ul" className={popoverMenuClasses}>
          {children}
        </Box>
      </div>
      {/* </FocusLock> */}
    </Portal>
  );
};

export default Popover;
