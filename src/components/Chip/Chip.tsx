import { ElementType, forwardRef } from "react";
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef
} from "../../types/helpers";
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
export interface IChipBaseProps {
  className?: string;
  /**
   * The variant to use.
   */
  variant?: TChipVariants;
  /**
   * Apply sharp edges
   */
  square?: boolean;
  /**
   * Controls Chip size
   */
  size?: "small" | "medium";
}

const Chip: ChipComponent = forwardRef(
  <C extends ElementType = "div">(
    {
      className,
      as,
      children,
      variant = "primaryOutline",
      size = "medium",
      square,
      ...delegated
    }: TChipProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { containerClasses } = useChipClasses({
      className,
      variant,
      square,
      size
    });
    const Component = as || "div";
    return (
      <Component ref={ref} className={containerClasses} {...delegated}>
        {children}
      </Component>
    );
  }
);

export default Chip;
export type ChipComponent = <C extends ElementType>(
  props: TChipProps<C>
) => JSX.Element | null;
export type TChipProps<C extends ElementType> =
  PolymorphicComponentPropsWithRef<C, IChipBaseProps>;
