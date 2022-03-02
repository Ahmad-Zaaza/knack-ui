import { RefObject, useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

const useGetBoundingClientRect = <T extends Element = HTMLElement>(
  nodeRef: RefObject<T | undefined | null>
): DOMRect | undefined | null => {
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [element, setElement] = useState(nodeRef.current);

  const initialRectIsSet = useRef(false);

  // State initializes before refs are placed, meaning the element state will
  // be undefined on the first render. We still want the rect on the first
  // render, so initially we'll use the nodeRef that was passed instead of
  // state for our measurements.
  useIsomorphicLayoutEffect(() => {
    if (nodeRef.current !== element) {
      setElement(nodeRef.current);
    }
  });
  useIsomorphicLayoutEffect(() => {
    if (element && !initialRectIsSet.current) {
      initialRectIsSet.current = true;
      setRect(element.getBoundingClientRect());
    }
  }, [element]);
  return rect;
};

export default useGetBoundingClientRect;
type PRect = Partial<DOMRect> & {
  readonly bottom: number;
  readonly height: number;
  readonly left: number;
  readonly right: number;
  readonly top: number;
  readonly width: number;
};
export type { PRect };
