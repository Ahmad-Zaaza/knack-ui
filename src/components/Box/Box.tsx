import { forwardRef } from "react";
import * as Polymorphic from "../../types/helpers";
import useBoxClasses from "./useBoxClasses";

interface BoxProps {
  className?: string;
  /**
   * The variant to use.
   */
  variant?: "outlined" | "elevated";
  /**
   * Controls the shadow depth
   */
  elevation?: 0 | 1 | 2 | 3 | 4 | 6;
  /**
   * Remove default `Box` border radius
   */
  square?: boolean;
  /**
   * Preset padding values
   */
  paddingPreset?: "card";
}

const Box = forwardRef(
  (
    {
      className,
      as: Component = "div",
      children,
      variant = "elevated",
      square,
      paddingPreset,
      elevation = 1,
      ...delegated
    },
    ref
  ) => {
    const { containerClasses } = useBoxClasses({
      className,
      variant,
      elevation,
      square,
      paddingPreset
    });

    return (
      <Component ref={ref} className={containerClasses} {...delegated}>
        {children}
      </Component>
    );
  }
) as Polymorphic.ForwardRefComponent<"div", BoxProps>;

export default Box;

export type { BoxProps };
