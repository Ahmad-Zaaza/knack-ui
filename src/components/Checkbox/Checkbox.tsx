import { ComponentPropsWithoutRef, forwardRef } from "react";
import useCheckboxClasses from "./useCheckboxClasses";

export interface ICheckboxProps
  extends Omit<
    ComponentPropsWithoutRef<"input">,
    "type" | "className" | "size"
  > {
  size?: "small" | "default" | "large";
  /**
   * Controls whether or not the checkbox is checked.
   *
   */
  checked?: boolean;
  /**
   * Controls whether or not the checkbox is disabled.
   *
   */
  disabled?: boolean;
  /**
   * Controls the color of the checkbox.
   *
   * Only `primary` and `secondary` are supported for now waiting for feedback.
   *
   */
  color?: "primary" | "secondary";
}

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ checked, size = "default", color = "primary", ...delegated }, ref) => {
    const { containerClasses } = useCheckboxClasses({
      size,
      color
    });
    return (
      <span className={containerClasses}>
        <input
          aria-checked={checked}
          checked={checked}
          ref={ref}
          {...delegated}
          type="checkbox"
        />

        <span aria-hidden />
      </span>
    );
  }
);

export default Checkbox;
