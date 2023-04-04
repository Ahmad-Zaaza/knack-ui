import { useMemo } from "react";

import { TypographyProps, TypographyVariants } from "./Typography";
import { calculateIndentStyles } from "../../utils/helpers";

const useTypographyStyles = ({
  mb,
  mt,
  my,
  mx
}: Pick<TypographyProps, "mb" | "mt" | "my" | "mx">) => {
  const textStyles: { [K in TypographyVariants]: any } = useMemo(
    () => ({
      h1: {
        "--fs": "clamp(2.25rem, 4.6875vw, 3rem)",
        "--lh": "1.17",
        "--fw": "600"
      },
      h2: {
        "--fs": "clamp(2rem, 1.25rem + 1.5625vw, 2.25rem)",
        "--lh": "1.1",
        "--fw": "600"
      },
      h3: {
        "--fs": "clamp(1.5rem, 3.125vw, 2rem)",
        "--lh": "1.25",
        "--fw": "600"
      },
      h4: {
        "--fs": "clamp(1.25rem, 0.5rem + 1.5625vw, 1.5rem)",
        "--lh": "1.17",
        "--fw": "600"
      },
      h5: {
        "--fs": "clamp(1rem, 0.25rem + 1.5625vw, 1.25rem)",
        "--lh": "1.2",
        "--fw": "600"
      },
      h6: {
        "--fs": "clamp(0.875rem, 0.5rem + 0.78125vw, 1rem)",
        "--lh": "1.5",
        "--fw": "600"
      },
      subtitle1: {
        "--fs": "clamp(1rem, 0.25rem + 1.5625vw, 1.25rem)",
        "--lh": "1.2",
        "--fw": "400"
      },
      subtitle2: {
        "--fs": "clamp(0.875rem, 0.5rem + 0.78125vw, 1rem)",
        "--lh": "1.2",
        "--fw": "400"
      },
      body1: {
        "--fs": "1rem",
        "--lh": "1.5",
        "--fw": "400"
      },
      body2: {
        "--fs": "0.875rem",
        "--lh": "1.42",
        "--fw": "400"
      },
      body3: {
        "--fs": "0.75rem",
        "--lh": "1.33",
        "--fw": "400"
      },
      caption: {
        "--fs": "0.625rem",
        "--lh": "0.8",
        "--fw": "400"
      }
    }),
    []
  );
  const indentStyles = useMemo(
    () =>
      calculateIndentStyles({
        "margin-block": my,
        "margin-inline": mx,
        "margin-bottom": mb,
        "margin-top": mt
      }),
    [my, mx, mb, mt]
  );
  return { textStyles, indentStyles };
};

export default useTypographyStyles;
