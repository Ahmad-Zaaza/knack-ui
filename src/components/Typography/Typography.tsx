import { createElement, forwardRef } from "react";
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef
} from "../../types/helpers";
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
export type TypographyVariants =
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

export type TypographyColors = "primary" | "secondary" | "muted";
export type TypographyFontWeight =
  | "bold"
  | "semibold"
  | "medium"
  | "normal"
  | "light";
export type TBaseTypographyProps = {
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
};

export type TypographyComponent = <C extends TypographyTags>(
  _props: TypographyProps<C>
) => JSX.Element | null;

export type TypographyProps<C extends TypographyTags> =
  PolymorphicComponentPropsWithRef<C, TBaseTypographyProps>;

const Typography: TypographyComponent = forwardRef(
  <C extends TypographyTags = "p">(
    {
      className,
      as,
      variant,
      children,
      fontWeight,
      color,
      textAlign,
      ...delegated
    }: TypographyProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { typographyClasses } = useTypographyClasses({
      className,
      variant,
      color,
      fontWeight,
      textAlign
    });
    const component = as || "p";
    return createElement(
      component,
      { className: typographyClasses, ref, ...delegated },
      children
    );
  }
);

export default Typography;
