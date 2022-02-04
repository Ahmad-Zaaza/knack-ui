import { ElementType, forwardRef } from "react";
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef
} from "../../types/helpers";
import useButtonClasses from "./useButtonClasses";

type TButtonVariants =
  | "primary"
  | "secondary"
  | "ghost"
  | "primaryOutline"
  | "secondaryOutline"
  | "ghostOutline";

export interface TBaseButtonProps {
  variant?: TButtonVariants;
  size?: "small" | "medium";
  isLoading?: boolean;
}

type ButtonComponent = <C extends ElementType = "button">(
  _props: TButtonProps<C>
) => JSX.Element | null;

export type TButtonProps<C extends ElementType> =
  PolymorphicComponentPropsWithRef<C, TBaseButtonProps>;


const Button: ButtonComponent = forwardRef(
  <C extends ElementType = "button">(
    {
      className,
      variant = "primary",
      size = "medium",
      isLoading,
      as,
      children,
      ...delegated
    }: TButtonProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { containerClasses } = useButtonClasses({
      className,
      variant,
      size,
      isLoading
    });
    const Component = as || "button";
    return (
      <Component {...delegated} className={containerClasses} ref={ref}>
        {children}
      </Component>
    );
  }
);
export default Button;
