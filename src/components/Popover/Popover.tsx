import {
  useMemo,
  useState,
  useRef,
  RefObject,
  ComponentPropsWithoutRef,
  MouseEvent
} from "react";

import { useRect } from "@reach/rect";
import styled from "styled-components";
import { Portal } from "../Portal";
import usePopoverUtils from "./usePopoverUtils";
import { PRect } from "../../utils/useGetBoundingClientRect";
import { getCollisions } from "../../utils/helpers";
import { Box, IBoxProps } from "../Box";
import * as Polymorphic from "../../types/helpers";
import useRootInert from "../../utils/useRootInert";

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
  popoverProps?: Polymorphic.Merge<ComponentPropsWithoutRef<"div">, IBoxProps>;
}

/**
 * Change log:
 *
 * remove `animationType` prop.
 *
 */
const Popover: React.FC<IPopoverProps> = ({
  isOpen,
  children,
  onClose,
  parentRef,
  offset,
  position = positionDefault,

  popoverProps
}) => {
  const [active, setActive] = useState(false);

  const popoverRef = useRef(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const parentRect = useRect(parentRef);
  const popoverRect = useRect(popoverRef);

  useRootInert(isOpen);

  usePopoverUtils({
    isOpen,
    onClose,
    setActive
  });

  const onTransitionEnd = () => {
    setActive(isOpen);
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!overlayRef.current) return;
    if (e.target === overlayRef.current) {
      onClose();
    }
  };
  const state = useMemo(() => {
    if (isOpen && active) {
      return "OPENED";
    }
    if (isOpen && !active) {
      return "OPENING";
    }
    if (!isOpen && active) {
      return "CLOSING";
    }
    if (!isOpen && !active) {
      return "CLOSED";
    }
  }, [isOpen, active]);

  if (!isOpen && !active) return null;

  return (
    <Portal>
      <Overlay
        tabIndex={-1}
        ref={overlayRef}
        onClick={handleClick}
        role="presentation"
      />
      <Wrapper
        data-state={state}
        onTransitionEnd={onTransitionEnd}
        ref={popoverRef}
        role="presentation"
        {...popoverProps}
        style={{
          ...getStyles(position, parentRect as PRect, popoverRect as PRect, {
            bottom: offset?.bottom ?? 0,
            left: offset?.left ?? 0
          }),
          ...popoverProps?.style
        }}
      >
        {children}
      </Wrapper>
    </Portal>
  );
};

export default Popover;
export type { IPopoverProps };

const Wrapper = styled(Box)`
  --shadow-alpha: 15%;
  position: absolute;
  filter: drop-shadow(0 3px 3px hsl(0 0% 0% / var(--_shadow-alpha)))
    drop-shadow(0 12px 12px hsl(0 0% 0% / var(--_shadow-alpha)));
  transition: opacity 0.1s ease, transform 0.2s ease-out;
  color: CanvasText;
  opacity: 0;

  &:is([data-state="OPENED"]) {
    transition-duration: 200ms;
    opacity: 1;
  }
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background: transparent;
`;
