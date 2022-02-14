import { useEffect, useRef } from "react";

interface IFocusLockProps {
  focusLock?: boolean;
  open: boolean;
}

const FocusLock: React.FC<IFocusLockProps> = ({
  children,
  open,
  focusLock
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line no-undef
  const focusableItems = useRef<NodeListOf<Element> | null>(null);
  // 🚼 Put children's children into focusableItems ref each time they change
  useEffect(() => {
    if (!rootRef.current) return;
    const updateFocusableItems = () => {
      if (!rootRef.current) return;
      focusableItems.current = rootRef.current.querySelectorAll(
        'input, select, textarea, button, [href], [tabindex]:not([tabindex="-1"]), video'
      );
    };
    const observer = new MutationObserver(updateFocusableItems);
    observer.observe(rootRef.current, { childList: true });

    // eslint-disable-next-line consistent-return
    return () => {
      observer.disconnect();
    };
  }, [rootRef]);
  useEffect(() => {
    if (open && rootRef.current && focusableItems.current) {
      let focused = [];
      focused = [
        ...rootRef.current.querySelectorAll(
          'input:focus, button:focus, [href]:focus, select:focus, textarea:focus, [tabindex]:not([tabindex="-1"]):focus, video:focus'
        )
      ];

      if (focused.length === 0 && focusableItems.current.length > 0) {
        let firstFocusItem: HTMLElement | null = null;
        const closedButtonEl = rootRef.current?.querySelector("button");

        focusableItems.current.forEach((item) => {
          if (item !== closedButtonEl && firstFocusItem === null) {
            // @ts-ignore
            firstFocusItem = item;
          }
        });

        if (firstFocusItem === null) {
          firstFocusItem = closedButtonEl as HTMLElement;
        }

        firstFocusItem.focus();
      }
    }
  }, [open, rootRef, focusableItems]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!focusableItems.current || focusableItems.current.length === 0) {
        return;
      }

      const { key, shiftKey } = event;
      const {
        length,
        0: firstItem,
        [length - 1]: lastItem
      } = focusableItems.current;

      if (focusLock && key === "Tab") {
        // If only one item then prevent tabbing when locked
        if (length === 1) {
          event.preventDefault();
          return;
        }

        // If focused on last item then focus on first item when tab is pressed
        if (!shiftKey && document.activeElement === lastItem) {
          event.preventDefault();
          // @ts-ignore
          firstItem.focus();
          return;
        }

        // If focused on first item then focus on last item when shift + tab is pressed
        if (shiftKey && document.activeElement === firstItem) {
          event.preventDefault();
          // @ts-ignore
          lastItem.focus();
        }
      }
    };

    if (open) {
      window.addEventListener("keydown", handleKeyPress);

      return () => {
        window.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [focusLock, focusableItems, open]);
  return <div ref={rootRef}>{children}</div>;
};

export default FocusLock;
