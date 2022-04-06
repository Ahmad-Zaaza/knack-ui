import { forwardRef, useRef, useState } from "react";
import composeRefs from "@seznam/compose-react-refs";
import { useRect } from "@reach/rect";
import { Stack, StackProps } from "../Stack";
import useHorizontalListClasses from "./useHorizontalListClasses";
import * as Polymorphic from "../../types/helpers";
import { Button } from "../Button";
import { useIsomorphicLayoutEffect } from "../../utils/useIsomorphicLayoutEffect";

interface IHorizontalListProps extends StackProps {
  activeIndex?: number;
}

// TODO: Add Disabled state
const HorizontalList = forwardRef(
  (
    { className, children, as: Component = Stack, activeIndex, ...delegated },
    ref
  ) => {
    const { containerClasses, listArrowsClasses, horizontalListClasses } =
      useHorizontalListClasses({
        className
      });

    const [showButtons, setShowButtons] = useState(false);
    const listRef = useRef<HTMLDivElement | null>(null);
    const parentRef = useRef<HTMLDivElement | null>(null);

    const listRect = useRect(listRef);
    const parentRect = useRect(parentRef);
    useIsomorphicLayoutEffect(() => {
      if (parentRect && listRef.current) {
        const list = listRef.current;
        const listWidth = list.scrollWidth;

        if (listWidth > parentRect.width + 0.1 && !showButtons) {
          setShowButtons(true);
        } else if (showButtons) {
          setShowButtons(false);
        }
      }
    }, [listRect, parentRect]);
    useIsomorphicLayoutEffect(() => {
      if (activeIndex && parentRect && listRef.current) {
        const list = listRef.current;
        const child = list.childNodes[activeIndex] as Element;
        if (child) {
          child.scrollIntoView({ inline: "start" ,behavior:'auto',block:'center'});
        }
        // console.log(list.childNodes[activeIndex].scrollIntoView() as Element);
      }
    }, [activeIndex, listRect, parentRect]);

    const handleScrollForward = () => {
      if (listRef.current && parentRect) {
        if (window.document.dir === "rtl") {
          listRef.current.scrollLeft -= parentRect.width / 2;
        } else {
          listRef.current.scrollLeft += parentRect.width / 2;
        }
      }
    };
    const handleScrollBackward = () => {
      if (listRef.current && parentRect) {
        if (window.document.dir === "rtl") {
          listRef.current.scrollLeft += parentRect.width / 2;
        } else {
          listRef.current.scrollLeft -= parentRect.width / 2;
        }
      }
    };
    return (
      <Stack gap={2} ref={parentRef} className={containerClasses}>
        <Component
          className={horizontalListClasses}
          ref={composeRefs(listRef, ref)}
          {...delegated}
        >
          {children}
        </Component>

        {showButtons ? (
          <Stack className={listArrowsClasses} gap={2}>
            <Button
              onClick={handleScrollBackward}
              iconOnly
              kind="defaultOutline"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </Button>
            <Button
              onClick={handleScrollForward}
              iconOnly
              kind="defaultOutline"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </Button>
          </Stack>
        ) : null}
      </Stack>
    );
  }
) as Polymorphic.ForwardRefComponent<"div", IHorizontalListProps>;

export default HorizontalList;
export type { IHorizontalListProps };
