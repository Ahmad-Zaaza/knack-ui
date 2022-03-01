import { MutableRefObject, useRef, useState } from "react";
import useEventInEffect from "./useEventInEffect";

const useGetBoundingClientRect = <T extends Element>(): [
  DOMRect | undefined | null,
  MutableRefObject<T | null>
] => {
  const ref = useRef<T>(null);

  const [rect, setRect] = useState<DOMRect>();

  const set = () => setRect(ref.current?.getBoundingClientRect());

  useEventInEffect("resize", set);

  return [rect, ref];
};

export default useGetBoundingClientRect;
