import { createElement, forwardRef } from "react";
import * as Polymorphic from "../../types/helpers";
import useTypographyClasses from "./useTypographyClasses";

 type TypographyTags =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "label";
 type TypographyVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "subtitle1"
  | "subtitle2"
  | "button"
  | "caption";

 type TypographyColors =
  | "primary"
  | "secondary"
  | "muted"
  | "success"
  | "warning";
 type TypographyFontWeight =
  | "bold"
  | "semibold"
  | "medium"
  | "normal"
  | "light";
type TypographyProps = {
  variant?: TypographyVariants;
  /**
   * Controls the typography color
   */
  color?: TypographyColors;
  /**
   * Controls the typography font weight
   */
  fontWeight?: TypographyFontWeight;
  /**
   * Controls `text-align` CSS property.
   */
  textAlign?: "left" | "right" | "start" | "end" | "center";
  /**
   * Applies `line-clamp` to the element.
   */
  clamp?: 1 | 2 | 3 | 4;
};

const Typography = forwardRef(
  (
    {
      className,
      as,
      variant,
      children,
      fontWeight,
      color,
      clamp,
      textAlign,
      ...delegated
    },
    ref
  ) => {
    const { typographyClasses } = useTypographyClasses({
      className,
      variant,
      color,
      fontWeight,
      clamp,
      textAlign
    });
    const component = as || "p";
    return createElement(
      component,
      { className: typographyClasses, ref, ...delegated },
      children
    );
  }
) as Polymorphic.ForwardRefComponent<"p", TypographyProps>;

export default Typography;
export type {
  TypographyProps,
  TypographyTags,
  TypographyColors,
  TypographyFontWeight,
  TypographyVariants
};
