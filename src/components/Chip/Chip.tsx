import { forwardRef } from "react";
import * as Polymorphic from "../../types/helpers";
import useChipClasses from "./useChipClasses";

type TChipVariants =
  | "primary"
  | "secondary"
  | "primaryOutline"
  | "secondaryOutline"
  | "tertiary"
  | "success"
  | "danger"
  | "warning";
interface ChipProps {
  className?: string;
  /**
   * The variant to use.
   */
  variant?: TChipVariants;
  /**
   * Apply sharp edges
   */
  shape?: "square" | "rounded";

  /**
   * Controls Chip size
   */
  size?: "small" | "medium";
}

const Chip = forwardRef(
  (
    {
      className,
      as: Component = "div",
      children,
      variant = "primaryOutline",
      size = "medium",
      shape,
      ...delegated
    },
    ref
  ) => {
    const { containerClasses } = useChipClasses({
      className,
      variant,
      shape,
      size
    });

    return (
      <Component ref={ref} className={containerClasses} {...delegated}>
        {children}
      </Component>
    );
  }
) as Polymorphic.ForwardRefComponent<"div", ChipProps>;

export default Chip;

export type { ChipProps };
