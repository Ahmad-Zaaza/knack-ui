import { ComponentPropsWithoutRef, forwardRef, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import useBaseDialogUtils from "../BaseDialog/BaseDialog/useBaseDialogUtils";
import { DialogOverlay } from "../BaseDialog/DialogOverlay";

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
    // const { containerClasses } = useDrawerClasses({
    //   className,
    //   isOpen,
    //   position,
    //   active
    // });
    useBaseDialogUtils({ isOpen, onClose });

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
        <Wrapper
          data-state={state}
          onTransitionEnd={(e) => e.stopPropagation()}
          position={position}
          tabIndex={-1}
          ref={ref}
          className={className}
          {...delegated}
        >
          {children}
        </Wrapper>
      </DialogOverlay>
    );
  }
);

export default Drawer;

const Wrapper = styled.div<{
  position: IDrawerProps["position"];
}>`
  --isRTL: -1;
  --transition-transform-start: calc(100% * var(--isRTL));
  --transition-transform-end: calc(100% * var(--isRTL) * -1);
  --transition-transform-top: -100%;
  --transition-transform-bottom: 100%;

  transform: translateX(var(--_x, 0)) translateY(var(--_y, 0));
  transition: opacity 0.2s ease, transform 0.2s ease-out;

  position: absolute;
  will-change: transform;

  html[dir="rtl"] &,
  &[dir="rtl"] {
    --isRTL: 1;
  }

  ${(p) =>
    p.position === "end" &&
    css`
      inset-inline-end: 0;
      inset-block-start: 0;
      inset-block-end: 0;

      &:is([data-state="CLOSING"]) {
        --_x: var(--transition-transform-end);
      }
      &:is([data-state="OPENING"]) {
        --_x: var(--transition-transform-end);
      }
      &:is([data-state="OPENED"]) {
        --_x: 0;
      }
    `};

  ${(p) =>
    p.position === "start" &&
    css`
      inset-inline-start: 0;
      inset-block-start: 0;
      inset-block-end: 0;
      &:is([data-state="CLOSING"]) {
        --_x: var(--transition-transform-start);
      }
      &:is([data-state="OPENING"]) {
        --_x: var(--transition-transform-start);
      }
      &:is([data-state="OPENED"]) {
        --_x: 0;
      }
    `};

  ${(p) =>
    p.position === "top" &&
    css`
      inset-block-start: 0;
      inset-inline-start: 0;
      inset-inline-end: 0;
      &:is([data-state="CLOSING"]) {
        --_y: var(--transition-transform-top);
      }
      &:is([data-state="OPENING"]) {
        --_y: var(--transition-transform-top);
      }
      &:is([data-state="OPENED"]) {
        --_y: 0;
      }
    `};

  ${(p) =>
    p.position === "bottom" &&
    css`
      inset-block-end: 0;
      inset-inline-start: 0;
      inset-inline-end: 0;
      &:is([data-state="CLOSING"]) {
        --_y: var(--transition-transform-bottom);
      }
      &:is([data-state="OPENING"]) {
        --_y: var(--transition-transform-bottom);
      }
      &:is([data-state="OPENED"]) {
        --_y: 0;
      }
    `};
`;
