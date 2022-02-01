import { ComponentPropsWithoutRef, forwardRef } from "react";
import useCheckboxClasses from "./useCheckboxClasses";

export interface ICheckboxProps
  extends Omit<ComponentPropsWithoutRef<"input">, "type" | "className"> {
  variant?: "small" | "default" | "large";
}

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ disabled, checked, variant = "default", ...delegated }, ref) => {
    const { containerClasses } = useCheckboxClasses({
      disabled,
      variant
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
