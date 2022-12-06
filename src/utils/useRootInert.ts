import { useEffect } from "react";

const useRootInert = (value: boolean) => {
  useEffect(() => {
    if (!document.getElementById("inertPolyfill")) {
      const el = document.createElement("script");
      el.id = "inertPolyfill";
      el.src =
        "https://polyfill.io/v3/polyfill.min.js?features=Element.prototype.inert";
      el.async = true;
      document.body.appendChild(el);
    }
  }, []);

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
