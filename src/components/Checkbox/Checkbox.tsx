import { ComponentPropsWithoutRef, forwardRef } from "react";
import useCheckboxClasses from "./useCheckboxClasses";

export interface ICheckboxProps
  extends Omit<ComponentPropsWithoutRef<"input">, "type" | "className" | 'size'> {
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
}

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ disabled, checked, size = "default", ...delegated }, ref) => {
    const { containerClasses } = useCheckboxClasses({
      disabled,
      size
    });
    return (
      <span className={containerClasses}>
        <input
          aria-checked={checked}
          checked={checked}
          ref={ref}
          disabled={disabled}
          {...delegated}
          type="checkbox"
        />

        <span aria-hidden />
      </span>
    );
  }
);

export default Checkbox;
