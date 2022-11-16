import { useEffect } from "react";

const useRootInert = (value: boolean) => {
  useEffect(() => {
    if (value) {
      const root = document.querySelector("#root, #__next");
      root?.setAttribute("inert", "true");
    } else {
      const root = document.querySelector("#root, #__next");
      root?.removeAttribute("inert");
    }
  }, [value]);
};

export default useRootInert;
