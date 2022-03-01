import { createElement, ElementType, forwardRef } from "react";
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef
} from "../../types/helpers";
import useButtonClasses from "./useButtonClasses";

type TButtonVariants =
  | "primary"
  | "secondary"
  | "tertiary"
  | "ghost"
  | "primaryOutline"
  | "secondaryOutline"
  | "ghostOutline"
  | "danger"
  | "default"
  | "defaultOutline";

export interface TBaseButtonProps {
  /**
   * Appearance of the button
   */
  kind?: TButtonVariants;
  /**
   * Controls the size of the button
   */
  variant?: "small" | "medium";
  /**
   * If `true` sets the width to 100%
   */
  fullWidth?: boolean;
  /**
   * If `true` Shows a loading indicator
   */
  isLoading?: boolean;
  /**
   * If `true` will render an Icon button
   */
  iconOnly?: boolean;
  /**
   * If `true` will render an Icon button
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * If `false` will disable hover elevation animation.
   *
   * @default true
   */
  elevationAnimation?: boolean;
}

export type ButtonComponent = <C extends ElementType = "button">(
  _props: TButtonProps<C>
) => JSX.Element | null;

export type TButtonProps<C extends ElementType> =
  PolymorphicComponentPropsWithRef<C, TBaseButtonProps>;

const Button: ButtonComponent = forwardRef(
  <C extends ElementType = "button">(
    {
      className,
      variant = "medium",
      kind = "primary",
      isLoading,
      as,
      type,
      children,
      fullWidth,
      iconOnly,
      elevationAnimation,

      ...delegated
    }: TButtonProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { containerClasses } = useButtonClasses({
      className,
      variant,
      kind,
      isLoading,
      fullWidth,
      iconOnly,
      elevationAnimation
    });
    const component = as || "button";
    return createElement(
      component,
      {
        className: containerClasses,
        ref,
        type: type || "button",
        ...delegated
      },
      children
    );
  }
);
export default Button;
