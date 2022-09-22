import { forwardRef } from "react";
import * as Polymorphic from "../../types/helpers";
import DeleteIcon from "./DeleteIcon";
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
   * Chip border radius
   */
  shape?: "square" | "rounded";

  /**
   * Controls Chip size
   */
  size?: "small" | "medium";
  onDelete?: () => void;
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
      onDelete,
      ...delegated
    },
    ref
  ) => {
    const { containerClasses, contentClasses, iconClasses } = useChipClasses({
      className,
      variant,
      shape,
      size
    });

    return (
      <Component ref={ref} className={containerClasses} {...delegated}>
        <span className={contentClasses}>{children}</span>
        {typeof onDelete !== "undefined" ? (
          <DeleteIcon onClick={onDelete} className={iconClasses} />
        ) : null}
      </Component>
    );
  }
) as Polymorphic.ForwardRefComponent<"div", ChipProps>;

export default Chip;

export type { ChipProps };
