import { MouseEvent, useRef, Dispatch, SetStateAction } from "react";
import { RemoveScroll } from "react-remove-scroll";
import styled, { css } from "styled-components";
import { Portal } from "../../Portal";

import { fade, fadeExit } from "../../../lib/animations";
import { IDrawerProps } from "../../Drawer/Drawer";

interface IDialogOverlayProps
  extends Pick<
    IDrawerProps,
    | "isOpen"
    | "children"
    | "onClose"
    | "disableScrollLock"
    | "disableFocusLock"
    | "allowPinchZoom"
  > {
  active?: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const DialogOverlay: React.FC<IDialogOverlayProps> = ({
  isOpen,
  children,
  disableScrollLock,
  allowPinchZoom,
  onClose,
  active,
  setActive
}) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!overlayRef.current) return;
    if (e.target === overlayRef.current) {
      onClose();
    }
  };
  const onAnimationEnd = () => {
    setActive(isOpen);
  };
  if (!isOpen && !active) return null;
  return (
    <Portal>
      <RemoveScroll
        style={{ isolation: "isolate" }}
        enabled={!disableScrollLock}
        allowPinchZoom={allowPinchZoom}
      >
        <Overlay
          onAnimationEnd={onAnimationEnd}
          ref={overlayRef}
          $shouldClose={!isOpen && active}
          onClick={handleClick}
          role="presentation"
        >
          {children}
        </Overlay>
      </RemoveScroll>
    </Portal>
  );
};

export default DialogOverlay;

const Overlay = styled.div<{ $shouldClose?: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
  animation: ${fade} 100ms linear forwards;
  backdrop-filter: blur(1px);
  ${(p) =>
    p.$shouldClose &&
    css`
      animation: ${fadeExit} 200ms 200ms linear forwards;
    `}
`;
