/* eslint-disable no-param-reassign */
import {
  useMemo,
  useState,
  useRef,
  RefObject,
  ComponentPropsWithoutRef
} from "react";

import classnames from "classnames/bind";
import { useRect } from "@reach/rect";
import styles from "../../tailwind.css";
import { Portal } from "../Portal";
import usePopoverUtils from "./usePopoverUtils";
import { Box } from "..";
import { PRect } from "../../utils/useGetBoundingClientRect";
import { getCollisions } from "../../utils/helpers";
import { BoxProps } from "../Box";
import * as Polymorphic from "../../types/helpers";
// import FocusLock from "../../utils/FocusLock";

const clsx = classnames.bind(styles);

export type PopoverAnimations = "fade" | "fade-up";
interface PopoverOffset {
  left: number;
  bottom: number;
}

function getStyles(
  position: Position,
  targetRect: PRect | null,
  popoverRect: PRect | null,
  offset: PopoverOffset
): React.CSSProperties {
  return popoverRect
    ? position(targetRect, popoverRect, offset)
    : { visibility: "hidden" };
}

export type Position = (
  targetRect?: PRect | null,
  popoverRect?: PRect | null,
  offset?: PopoverOffset
) => React.CSSProperties;

function getTopPosition(
  targetRect: PRect,
  popoverRect: PRect,
  isDirectionUp: boolean,
  offsetBottom: number
) {
  return {
    top: isDirectionUp
      ? `${
          targetRect.top -
          popoverRect.height +
          offsetBottom +
          window.pageYOffset
        }px`
      : `${
          targetRect.top + targetRect.height + offsetBottom + window.pageYOffset
        }px`
  };
}

// @ts-ignore
export const positionDefault: Position = (
  targetRect: PRect,
  popoverRect: PRect,
  offset: PopoverOffset
) => {
  if (!targetRect || !popoverRect) {
    return {};
  }

  const { directionRight, directionUp } = getCollisions(
    targetRect,
    popoverRect,
    offset.left,
    offset.bottom
  );
  return {
    left: directionRight
      ? `${
          targetRect.right -
          popoverRect.width +
          (offset.left ?? 0) +
          window.pageXOffset
        }px`
      : `${targetRect.left + (offset.left ?? 0) + window.pageXOffset}px`,
    ...getTopPosition(targetRect, popoverRect, directionUp, offset.bottom)
  };
};
interface IPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  parentRef: RefObject<HTMLElement>;
  disableFocusLock?: boolean;
  position?: Position;
  offset?: PopoverOffset;
  animationType?: PopoverAnimations;
  popoverProps: Polymorphic.Merge<ComponentPropsWithoutRef<"div">, BoxProps>;
}
const Popover: React.FC<IPopoverProps> = ({
  isOpen,
  children,
  disableFocusLock: _,
  onClose,
  parentRef,
  offset,
  position = positionDefault,
  animationType = "fade",
  popoverProps: { style, className, ...leftPopoverProps }
}) => {
  const [active, setActive] = useState(false);

  const popoverRef = useRef(null);

  const parentRect = useRect(parentRef);
  const popoverRect = useRect(popoverRef);

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
        variant="outlined"
        role="presentation"
        tabIndex={-1}
        style={{
          ...getStyles(position, parentRect as PRect, popoverRect as PRect, {
            bottom: offset?.bottom ?? 0,
            left: offset?.left ?? 0
          }),
          ...style
        }}
        className={popoverMenuClasses}
        {...leftPopoverProps}
      >
        {children}
      </Box>
      {/* </FocusLock> */}
    </Portal>
  );
};

export default Popover;
export type { IPopoverProps };
