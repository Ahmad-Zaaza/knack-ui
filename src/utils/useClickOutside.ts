import { RefObject, useCallback } from "react";
import useEventInEffect from "./useEventInEffect";

const useClickOutside = <
  T extends HTMLElement = HTMLElement,
  P extends HTMLElement = HTMLElement
>(
  ref: RefObject<T>,
  cb: () => void,
  secondRef?: RefObject<P>
) => {
  const handleClickOutside = useCallback(
    (event: any) => {
      if (secondRef) {
        if (
          ref &&
          !ref.current?.contains(event.target as Node) &&
          !secondRef.current?.contains(event.target as Node)
        ) {
            
          return cb();
        }
      }
      if (ref && !ref.current?.contains(event.target as Node)) {
        cb();
      }
    },
    [ref, cb]
  );
  useEventInEffect("mousedown", handleClickOutside);
};

export default useClickOutside;
