import { FC, CSSProperties, forwardRef, ComponentPropsWithoutRef } from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import styled, { keyframes } from "styled-components";

interface IModalProps extends ComponentPropsWithoutRef<"div"> {
  isOpen: boolean;
  onClose: () => void;
  width?: string | number;
}

const Modal: FC<IModalProps> = forwardRef<HTMLDivElement, IModalProps>(
  ({ children, isOpen, onClose, width, style, ...delegated }, ref) => (
    <Overlay isOpen={isOpen} onDismiss={onClose}>
      <Content
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

const fadeUp = keyframes`
from {
  opacity:0;
  transform:translateY(10px)
}
to {
  opacity:1;
  transform:translateY(0px)
}
`;
const fade = keyframes`
from {
  opacity:0
}
to {
  opacity:1
}
`;

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
const Content = styled(DialogContent)`
  max-width: var(--width, 750px);
  animation: ${fadeUp} 250ms linear forwards;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
  padding: 2rem;
  padding-bottom: 0;
  width: var(--width, fit-content);
  position: relative;
`;
