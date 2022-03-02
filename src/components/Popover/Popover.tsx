/* eslint-disable no-param-reassign */
import { useMemo, useState, useRef, RefObject } from "react";

import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { Portal } from "../Portal";
import usePopoverUtils from "./usePopoverUtils";
import { Box } from "..";
import useGetBoundingClientRect, {
  PRect
} from "../../utils/useGetBoundingClientRect";
import { getCollisions } from "../../utils/helpers";
// import FocusLock from "../../utils/FocusLock";

const clsx = classnames.bind(styles);

export type PopoverAnimations = "fade" | "fade-up";

interface IPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  parentRef: RefObject<HTMLElement>;
  disableFocusLock?: boolean;
  popoverClasses?: string;

  position?: Position;
  animationType?: PopoverAnimations;
}


function getStyles(
  position: Position,
  targetRect: PRect | null,
  popoverRect: PRect | null
): React.CSSProperties {
  return popoverRect
    ? position(targetRect, popoverRect)
    : { visibility: "hidden" };
}


export type Position = (
  targetRect?: PRect | null,
  popoverRect?: PRect | null
) => React.CSSProperties;

function getTopPosition(
  targetRect: PRect,
  popoverRect: PRect,
  isDirectionUp: boolean
) {
  return {
    top: isDirectionUp
      ? `${targetRect.top - popoverRect.height + window.pageYOffset}px`
      : `${targetRect.top + targetRect.height + window.pageYOffset}px`
  };
}

// @ts-ignore
export const positionDefault: Position = (
  targetRect: PRect,
  popoverRect: PRect
) => {
  if (!targetRect || !popoverRect) {
    return {};
  }

  const { directionRight, directionUp } = getCollisions(
    targetRect,
    popoverRect
  );
  return {
    left: directionRight
      ? `${targetRect.right - popoverRect.width + window.pageXOffset}px`
      : `${targetRect.left + window.pageXOffset}px`,
    ...getTopPosition(targetRect, popoverRect, directionUp)
  };
};

const Popover: React.FC<IPopoverProps> = ({
  isOpen,
  children,
  disableFocusLock: _,
  onClose,
  parentRef,
  position = positionDefault,
  animationType = "fade",
  popoverClasses: className
}) => {
  const [active, setActive] = useState(false);

  const popoverRef = useRef(null);

  const parentRect = useGetBoundingClientRect(parentRef);
  const popoverRect = useGetBoundingClientRect(popoverRef);

  usePopoverUtils({
    isOpen,
    onClose,
    setActive,
    parentRef,
    ref: popoverRef
  });

  const popoverMenuClasses = useMemo(
    () =>
      clsx(
        "popover",
        {
          [`${animationType}--active`]: isOpen && active,
          [`${animationType}--initial`]: true
        },
        className
      ),
    [className, isOpen, active]
  );
  // const popoverClasses = useMemo(() => clsx("popover", className), [className]);

  const onTransitionEnd = () => {
    setActive(isOpen);
  };

  if (!isOpen && !active) return null;

  return (
    <Portal>
      {/* <FocusLock open={isOpen} focusLock={!!disableFocusLock}> */}
      <Box
        onTransitionEnd={onTransitionEnd}
        ref={popoverRef}
        role="presentation"
        tabIndex={-1}
        style={{
          ...getStyles(position, parentRect as PRect, popoverRect as PRect)
        }}
        className={popoverMenuClasses}
      >
        {children}
      </Box>
      {/* </FocusLock> */}
    </Portal>
  );
};

export default Popover;
export type { IPopoverProps };
