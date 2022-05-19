import { MouseEvent, useRef, useMemo, Dispatch, SetStateAction } from "react";
import classnames from "classnames/bind";
import { RemoveScroll } from "react-remove-scroll";
import FocusLock from "../../../utils/FocusLock";
import { Portal } from "../../Portal";
import { IBaseDialogProps } from "../BaseDialog/BaseDialog";

import styles from "../../../tailwind.css";

const clsx = classnames.bind(styles);

interface IDialogOverlayProps
  extends Pick<
    IBaseDialogProps,
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
  disableFocusLock,
  disableScrollLock,
  allowPinchZoom,
  onClose,
  active,
  setActive
}) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const overlayClasses = useMemo(
    () => clsx("dialog-overlay", { "dialog-overlay-active": isOpen && active }),
    [isOpen, active]
  );
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!overlayRef.current) return;
    if (e.target === overlayRef.current) {
      onClose();
    }
  };
  const onTransitionEnd = () => {
    setActive(isOpen);
  };
  if (!isOpen && !active) return null;
  return (
    <Portal>
      <FocusLock open={isOpen} focusLock={!disableFocusLock}>
        <RemoveScroll
          enabled={!disableScrollLock}
          allowPinchZoom={allowPinchZoom}
        >
          <div
            onTransitionEnd={onTransitionEnd}
            ref={overlayRef}
            onClick={handleClick}
            role="presentation"
            tabIndex={-1}
            className={overlayClasses}
          >
            {children}
          </div>
        </RemoveScroll>
      </FocusLock>
    </Portal>
  );
};

export default DialogOverlay;
