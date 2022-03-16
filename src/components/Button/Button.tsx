import { forwardRef } from "react";
import * as Polymorphic from "../../types/helpers";
import useButtonClasses from "./useButtonClasses";

type ButtonVariants =
  | "primary"
  | "secondary"
  | "tertiary"
  | "ghost"
  | "primaryOutline"
  | "secondaryOutline"
  | "ghostOutline"
  | "danger"
  | "warning"
  | "success"
  | "default"
  | "defaultOutline";

interface ButtonProps {
  /**
   * Appearance of the button
   */
  kind?: ButtonVariants;
  /**
   * Start Icon Component
   */
  startIcon?: JSX.Element;
  children: React.ReactNode;
  /**
   * Controls the size of the button
   */
  variant?: "small" | "medium" | "large";
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

  shape?: "rounded" | "square";
  /**
   * If `false` will disable hover elevation animation.
   *
   * @default true
   */
  elevationAnimation?: boolean;
}

const Button = forwardRef(
  (
    {
      className,
      variant = "medium",
      kind = "primary",
      isLoading,
      as: Component = "button",
      type = "button",
      shape,
      fullWidth,
      iconOnly,
      elevationAnimation,
      startIcon,
      children,
      ...delegated
    },
    ref
  ) => {
    const { containerClasses, startIconClasses } = useButtonClasses({
      className,
      variant,
      kind,
      shape,
      isLoading,
      fullWidth,
      iconOnly,
      elevationAnimation
    });
    return (
      <Component
        ref={ref}
        className={containerClasses}
        type={type}
        {...delegated}
      >
        {startIcon ? (
          <span className={startIconClasses}>{startIcon}</span>
        ) : null}
        {children}
      </Component>
    );
  }
) as Polymorphic.ForwardRefComponent<"button", ButtonProps>;
export default Button;

export type { ButtonProps, ButtonVariants };
