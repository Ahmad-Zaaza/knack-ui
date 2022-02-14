import { ComponentPropsWithoutRef, forwardRef } from "react";
import FocusLock from "../../../utils/FocusLock";
import { Portal } from "../../Portal";
import useDialogClasses from "./useBaseDialogClasses";
import useBaseDialogUtils from "./useBaseDialogUtils";

export interface IBaseDialogProps
  extends Omit<ComponentPropsWithoutRef<"div">, "className"> {
  isOpen: boolean;
  onClose: () => void;
  overlayClassName?: string;
  dialogClassName?: string;
  focusLock?: boolean;
  bodyScrollLocked?: boolean;
  replaceScrollBar?: boolean;
  defaultBodyOverflow?: "hidden" | "visible";
}

const BaseDialog = forwardRef<HTMLDivElement, IBaseDialogProps>(
  (
    {
      dialogClassName,
      overlayClassName,
      isOpen,
      onClose,
      focusLock,
      children,
      replaceScrollBar = true,
      defaultBodyOverflow,
      bodyScrollLocked,
      ...delegated
    },
    ref
  ) => {
    // Append utils
    useBaseDialogUtils({
      isOpen,
      onClose,
      bodyScrollLocked,
      replaceScrollBar,
      defaultBodyOverflow
    });

    const { overlayClasses, dialogClasses } = useDialogClasses({
      dialogClassName,
      overlayClassName,
      isOpen
    });
    if (!isOpen) return null;

    return (
      <Portal>
        <FocusLock focusLock={focusLock} open={isOpen}>
          <div role="presentation" tabIndex={-1} className={overlayClasses}>
            <div
              ref={ref}
              role="dialog"
              aria-labelledby="modal-head"
              className={dialogClasses}
              {...delegated}
            >
              {children}
            </div>
          </div>
        </FocusLock>
      </Portal>
    );
  }
);

export default BaseDialog;
