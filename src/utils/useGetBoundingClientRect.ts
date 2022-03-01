import { useCallback, useState } from "react";

const useGetBoundingClientRect = <T extends Element>(): [
  DOMRect | undefined | null,
  (node: T) => void
] => {
  const [rect, setRect] = useState<DOMRect>();

  const ref = useCallback((node: T) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);

  return [rect, ref];
};

export default useGetBoundingClientRect;
