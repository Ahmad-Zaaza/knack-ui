import { EventHandler } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

const useEventInEffect = (
  // eslint-disable-next-line no-undef
  type: keyof WindowEventMap,
  // eslint-disable-next-line no-undef
  eventHandler: EventHandler<any>
) => {
  useIsomorphicLayoutEffect(() => {
    // @ts-ignore
    window.addEventListener(type, eventHandler);
    return () => window.removeEventListener(type, eventHandler);
  }, []);
};

export default useEventInEffect;
