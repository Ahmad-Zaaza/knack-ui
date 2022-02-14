/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { ComponentPropsWithoutRef, forwardRef, useState } from "react";
import { componentEventHandlers } from "../../../utils/helpers";
import { DialogOverlay } from "../DialogOverlay";
import useDialogClasses from "./useBaseDialogClasses";
import useBaseDialogUtils from "./useBaseDialogUtils";

export interface IBaseDialogProps
  extends Omit<ComponentPropsWithoutRef<"div">, "className"> {
  /**
   * Controls whether or not the dialog is open.
   *
   */
  isOpen: boolean;
  /**
   * This function is called whenever the user hits "Escape" or clicks outside
   * the dialog. _It's important to close the dialog `onClose`_.
   *
   * The only time you shouldn't close the dialog on dismiss is when the dialog
   * requires a choice and none of them are "cancel". For example, perhaps two
   * records need to be merged and the user needs to pick the surviving record.
   * Neither choice is less destructive than the other, so in these cases you
   * may want to alert the user they need to a make a choice on dismiss instead
   * of closing the dialog.
   *
   */
  onClose: () => void;
  dialogClassName?: string;
  /**
   * By default the dialog locks the focus inside it. Normally this is what you
   * want. This prop is provided so that this feature can be disabled. This,
   * however, is strongly discouraged.
   *
   * The reason it is provided is not to disable the focus lock entirely.
   * Rather, there are certain situations where you may need more control on how
   * the focus lock works. This should be complemented by setting up a focus
   * lock yourself that would allow more flexibility for your specific use case.
   *
   * If you do set this prop to `true`, make sure you set up your own
   * `FocusLock` component. You can likely use
   * `react-focus-lock`, which is what Knack-UI uses internally by default. It has
   * various settings to allow more customization, but it takes care of a lot of
   * hard work that you probably don't want or need to do.
   *
   */
  disableFocusLock?: boolean;
  /**
   * By default the dialog locks scrolling with `react-remove-scroll`, which
   * also injects some styles on the body element to remove the scrollbar while
   * maintaining its gap to prevent jank when the dialog's open state is
   * toggled. This is almost always what you want in a dialog, but in some cases
   * you may have the need to customize this behavior further.
   *
   * This prop will disable `react-remove-scroll` and allow you to compose your
   * own scroll lock component to meet your needs. Like the
   * `disableScrollLock` prop, this is generally discouraged and should
   * only be used if a proper fallback for managing scroll behavior is provided.
   *
   * @see https://github.com/theKashey/react-remove-scroll
   */
  disableScrollLock?: boolean;
  /**
   * Handle zoom/pinch gestures on iOS devices when scroll locking is enabled.
   * Defaults to `false`.
   *

   */
  allowPinchZoom?: boolean;
}
/**
 * An accessible dialog or modal window.
 */
const BaseDialog = forwardRef<HTMLDivElement, IBaseDialogProps>(
  (
    {
      dialogClassName,
      isOpen,
      onClose,
      disableFocusLock = false,
      disableScrollLock = false,
      allowPinchZoom = true,
      onClick,
      children,
      ...delegated
    },
    ref
  ) => {
    const [active, setActive] = useState(false);
    // Append utils
    useBaseDialogUtils({
      isOpen,
      onClose,

      setActive
    });

    const { dialogClasses } = useDialogClasses({
      dialogClassName,
      isOpen,
      active
    });

    return (
      <DialogOverlay
        setActive={setActive}
        active={active}
        onClose={onClose}
        isOpen={isOpen}
        disableFocusLock={disableFocusLock}
        allowPinchZoom={allowPinchZoom}
        disableScrollLock={disableScrollLock}
      >
        <div
          aria-modal="true"
          ref={ref}
          role="dialog"
          aria-labelledby="modal-head"
          className={dialogClasses}
          onClick={componentEventHandlers(onClick!, (event) => {
            event.stopPropagation();
          })}
          {...delegated}
        >
          {children}
        </div>
      </DialogOverlay>
    );
  }
);

export default BaseDialog;
