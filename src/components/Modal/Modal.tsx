import { FC, CSSProperties, forwardRef, ComponentPropsWithoutRef } from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import styled, { css } from "styled-components";
import { fade, fadeUp } from "../../lib/animations";

interface IModalProps extends ComponentPropsWithoutRef<"div"> {
  isOpen: boolean;
  onClose: () => void;
  width?: string | number;
  fullWidth?: boolean;
}

const Modal: FC<IModalProps> = forwardRef<HTMLDivElement, IModalProps>(
  (
    { children, isOpen, onClose, width, style, fullWidth, ...delegated },
    ref
  ) => (
    <Overlay isOpen={isOpen} onDismiss={onClose}>
      <Content
        fullWidth={fullWidth}
        ref={ref}
        style={
          {
            "--width": typeof width === "number" ? `${width}px` : width,
            ...style
          } as CSSProperties
        }
        {...delegated}
      >
        {children}
      </Content>
    </Overlay>
  )
);

export default Modal;
export type { IModalProps };

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.3);
  animation: ${fade} 100ms linear forwards;
  backdrop-filter: blur(1px);
`;
const Content = styled(DialogContent)<{ fullWidth?: boolean }>`
  animation: ${fadeUp} 250ms linear forwards;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
  padding: 2rem;
  padding-bottom: 0;
  width: var(--width, fit-content);
  position: relative;
  ${(p) =>
    p.fullWidth &&
    css`
      width: 100%;
      padding: 0;
      margin-left: unset;
      margin-right: unset;
      max-width: unset;
      margin-top: unset;
      height: 100%;
    `}
`;
