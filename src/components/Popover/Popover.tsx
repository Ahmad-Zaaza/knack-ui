import {
  useRef,
  useMemo,
  CSSProperties,
  Dispatch,
  SetStateAction
} from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { Portal } from "../Portal";
import usePopoverUtils from "./usePopoverUtils";
// import FocusLock from "../../utils/FocusLock";

const clsx = classnames.bind(styles);

export type AbsolutePositions = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

export interface IPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  disableFocusLock?: boolean;
  popoverClasses?: string;
  popoverStyles?: CSSProperties;
  position?: AbsolutePositions;
}

const Popover: React.FC<IPopoverProps> = ({
  isOpen,
  children,
  disableFocusLock: _,
  onClose,
  active,
  setActive,
  position,
  popoverClasses: className,
  popoverStyles
}) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  usePopoverUtils({ isOpen, onClose, setActive, ref: overlayRef, position });
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
        ref={overlayRef}
        role="presentation"
        tabIndex={-1}
        className={popoverClasses}
      >
        {children}
      </div>
      {/* </FocusLock> */}
    </Portal>
  );
};

export default Popover;
