import { ComponentPropsWithoutRef, forwardRef, useState } from "react";
import useBaseDialogUtils from "../BaseDialog/BaseDialog/useBaseDialogUtils";
import { DialogOverlay } from "../BaseDialog/DialogOverlay";
import useDrawerClasses from "./useDrawerClasses";

export interface IDrawerProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Controls whether or not the Drawer is open.
   *
   */
  isOpen: boolean;
  /**
   * Controls drawer animation direction.
   *
   */
  position?: "start" | "end" | "top" | "bottom";
  /**
   * This function is called whenever the user hits "Escape" or clicks outside
   * the Drawer. _It's important to close the Drawer `onClose`_.
   *
   * The only time you shouldn't close the Drawer on dismiss is when the Drawer
   * requires a choice and none of them are "cancel". For example, perhaps two
   * records need to be merged and the user needs to pick the surviving record.
   * Neither choice is less destructive than the other, so in these cases you
   * may want to alert the user they need to a make a choice on dismiss instead
   * of closing the Drawer.
   *dc
   */
  onClose: () => void;
  /**
   * By default the Drawer locks the focus inside it. Normally this is what you
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
   * By default the Drawer locks scrolling with `react-remove-scroll`, which
   * also injects some styles on the body element to remove the scrollbar while
   * maintaining its gap to prevent jank when the Drawer's open state is
   * toggled. This is almost always what you want in a Drawer, but in some cases
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

const Drawer = forwardRef<HTMLDivElement, IDrawerProps>(
  (
    {
      isOpen,
      onClose,
      children,
      className,
      allowPinchZoom,
      disableScrollLock,
      position = "end",
      disableFocusLock,
      ...delegated
    },
    ref
  ) => {
    const [active, setActive] = useState(false);
    const { containerClasses } = useDrawerClasses({
      className,
      isOpen,
      position,
      active
    });
    useBaseDialogUtils({ isOpen, onClose, setActive });
    return (
      <DialogOverlay
        disableScrollLock={disableScrollLock}
        isOpen={isOpen}
        onClose={onClose}
        setActive={setActive}
        active={active}
        allowPinchZoom={allowPinchZoom}
        disableFocusLock={disableFocusLock}
      >
        <div ref={ref} className={containerClasses} {...delegated}>
          {children}
        </div>
      </DialogOverlay>
    );
  }
);

export default Drawer;
