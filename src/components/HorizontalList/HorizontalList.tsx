import { forwardRef, CSSProperties } from "react";
import styled from "styled-components";
import * as Polymorphic from "../../types/helpers";

interface IHorizontalListProps {
  // /**
  //  * If Specified, the list will scroll to the child that has the same index.
  //  *
  //  * Helpful when you want to show an active Button or Chip that is hidden by overflow-hidden.
  //  */
  // activeIndex?: number;

  /**
   * Specifies spacing between items, value multiplied with a denominator of 4px
   *
   * @example
   *
   * spacing={4} // 4 * 4px = 16px
   */
  spacing?: number;
}

// TODO: Add Disabled state

/**
 * @description
 *
 *
 * Change log:
 *
 * - Replace `gap` prop with `spacing`
 *
 * - remove `activeIndex` prop
 */
const HorizontalList = forwardRef(
  ({ children, spacing, ...delegated }, ref) => (
    // const [scrollable, setScrollable] = useState(false);
    // const scrollerRef = useRef<HTMLDivElement | null>(null);
    // const parentRef = useRef<HTMLDivElement | null>(null);
    // const actualWidth = useRef<number | null>(null);
    // const scrollerRect = useRect(scrollerRef);
    // const parentRect = useRect(parentRef);

    // const debouncedShouldShowArrow = useDebouncedCallback(
    //   () => {
    //     if (scrollerRef.current && parentRef.current) {
    //       const list = scrollerRef.current;

    //       if (actualWidth.current === null) {
    //         actualWidth.current = list.scrollWidth;
    //       }
    //       const visibleListWidth = parentRef.current.clientWidth;

    //       const hasScrolls = actualWidth.current > visibleListWidth;

    //       if (hasScrolls) {
    //         setScrollable(true);
    //       } else {
    //         setScrollable(false);
    //       }
    //     }
    //   },
    //   // delay in ms
    //   200
    // );

    // useIsomorphicLayoutEffect(() => {
    //   debouncedShouldShowArrow();
    // }, [parentRect]);

    // useIsomorphicLayoutEffect(() => {
    //   if (activeIndex && scrollerRef.current) {
    //     const list = scrollerRef.current;
    //     const child = list.childNodes[0].childNodes[activeIndex] as Element;
    //     if (child) {
    //       const childX = child.getBoundingClientRect().x;

    //       if (window.document.dir === "rtl") {
    //         scrollerRef.current.scrollLeft -= childX;
    //       } else {
    //         scrollerRef.current.scrollLeft += childX;
    //       }
    //     }
    //   }
    // }, [activeIndex, scrollerRect]);

    // const handleScrollForward = () => {
    //   if (scrollerRef.current && parentRect) {
    //     if (window.document.dir === "rtl") {
    //       scrollerRef.current.scrollLeft -= parentRect.width / 2;
    //     } else {
    //       scrollerRef.current.scrollLeft += parentRect.width / 2;
    //     }
    //   }
    // };
    // const handleScrollBackward = () => {
    //   if (scrollerRef.current && parentRect) {
    //     if (window.document.dir === "rtl") {
    //       scrollerRef.current.scrollLeft += parentRect.width / 2;
    //     } else {
    //       scrollerRef.current.scrollLeft -= parentRect.width / 2;
    //     }
    //   }
    // };

    <Wrapper ref={ref} {...delegated}>
      {/* {scrollable && (
          <Button
            className={prevBtnClasses}
            onClick={handleScrollBackward}
            variant="tertiary"
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
        )} */}
      <InnerWrapper
        style={
          {
            ...(spacing && { "--hl-spacing": `${spacing * 4}px` })
          } as CSSProperties
        }
        // ref={scrollerRef}
        // ref={ref}
        // className={horizontalListScrollerClasses}
      >
        {/* <div ref={ref} {...delegated}> */}
        {children}
        {/* </div> */}
      </InnerWrapper>

      {/* {scrollable ? (
          <Button
            className={nextBtnClasses}
            onClick={handleScrollForward}
            variant="tertiary"
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
        ) : null} */}
    </Wrapper>
  )
) as Polymorphic.ForwardRefComponent<"div", IHorizontalListProps>;

export default HorizontalList;
export type { IHorizontalListProps };

const Wrapper = styled.div`
  overflow: auto hidden;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  min-block-size: fit-content;
  position: relative;
  display: flex;
  max-width: 100%;

  @media (prefers-reduced-motion: no-preference) {
    scroll-behavior: smooth;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  gap: var(--hl-spacing);
  & > * {
    scroll-snap-align: start;
    white-space: nowrap;
  }

  @media (hover: none) {
    scrollbar-width: none;
    padding-bottom: 12px;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
`;
