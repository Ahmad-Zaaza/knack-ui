import {
  ComponentPropsWithoutRef,
  CSSProperties,
  forwardRef,
  useEffect,
  useRef,
  useState
} from "react";
import composeRefs from "@seznam/compose-react-refs";
import { useRect } from "@reach/rect";
import { Stack } from "../Stack";
import useHorizontalListClasses from "./useHorizontalListClasses";
import * as Polymorphic from "../../types/helpers";
import { Button } from "../Button";

export interface IHorizontalListProps extends ComponentPropsWithoutRef<"div"> {}

// const arrowsWidth = 76;

const HorizontalList = forwardRef(
  ({ className, children, as: Component = Stack, ...delegated }, ref) => {
    const { containerClasses, listArrowsClasses } = useHorizontalListClasses({
      className
    });
    const [listWidth, setListWidth] =
      useState<CSSProperties["width"]>("max-content");
    const [showButtons, setShowButtons] = useState(false);
    const listRef = useRef<HTMLDivElement | null>(null);
    const parentRef = useRef<HTMLDivElement | null>(null);
    const listRect = useRect(listRef);
    const parentRect = useRect(parentRef);

    useEffect(() => {
      if (listRect && parentRect) {
        // console.log({ listWidth: listRect.width });
        // console.log({ parentWidth: parentRect.width });
        // console.log(listRect.width, "first");
        if (listRect.width > parentRect.width) {
          setListWidth((parentRect.width * 80) / 100);
          // listRect.width = 50;
          // console.log(listRect.width);
          setShowButtons(true);
        } else if (showButtons) {
          setShowButtons(false);
        }
      }
    }, [listRect, parentRect]);
    return (
      <Stack
        ref={parentRef}
        className={containerClasses}
        alignItems="baseline"
        gap={2}
      >
        <div style={{ overflow: "hidden" }}>
          <Component
            style={{ width: listWidth }}
            ref={composeRefs(listRef, ref)}
            {...delegated}
          >
            {children}
          </Component>
        </div>
        {showButtons ? (
          <Stack className={listArrowsClasses} gap={2}>
            <Button disabled iconOnly kind="defaultOutline">
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
            <Button iconOnly kind="defaultOutline">
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
) as Polymorphic.ForwardRefComponent<typeof Stack, IHorizontalListProps>;

export default HorizontalList;
