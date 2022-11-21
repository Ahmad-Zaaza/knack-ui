import { useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

export function useDarkMode(prefered: "light" | "dark" | "auto") {
  const [mode, setMode] = useState(() => {
    if (prefered === "auto") {
      if (typeof window !== "undefined") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
      return "light";
    }
    return prefered;
  });
  useIsomorphicLayoutEffect(() => {
    if (prefered !== "auto") return;
    const handleModeChange = () => {
      const doesMatch = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (doesMatch) {
        setMode("dark");
      } else {
        setMode("light");
      }
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleModeChange);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleModeChange);
    };
  }, [prefered]);
  return mode;
}
