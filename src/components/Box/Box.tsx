import { ElementType, forwardRef } from "react";
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef
} from "../../types/helpers";
import useBoxClasses from "./useBoxClasses";

export interface IBoxBaseProps {
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

const Box: BoxComponent = forwardRef(
  <C extends ElementType = "div">(
    {
      className,
      as,
      children,
      variant = "elevated",
      square,
      paddingPreset,
      elevation = 1,
      ...delegated
    }: TBoxProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { containerClasses } = useBoxClasses({
      className,
      variant,
      elevation,
      square,
      paddingPreset
    });
    const Component = as || "div";
    return (
      <Component ref={ref} className={containerClasses} {...delegated}>
        {children}
      </Component>
    );
  }
);

export default Box;
export type BoxComponent = <C extends ElementType>(
  props: TBoxProps<C>
) => JSX.Element | null;
export type TBoxProps<C extends ElementType> = PolymorphicComponentPropsWithRef<
  C,
  IBoxBaseProps
>;
