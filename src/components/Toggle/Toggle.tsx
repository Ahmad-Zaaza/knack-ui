import { ComponentPropsWithoutRef, forwardRef } from "react";
import useToggleClasses from "./useToggleClasses";

export interface IToggleProps
  extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
  /**
   * Controls the color of the checkbox.
   * 
   * Only `primary` and `secondary` are supported for now waiting for feedback.
   *
   */
  color?: "primary" | "secondary";
  /**
   * Controls whether or not the toggle is checked.
   *
   */
  checked?: boolean;
  /**
   * Controls whether or not the toggle is disabled.
   *
   */
  disabled?: boolean;
  /**
   * Controls the size of the toggle.
   *
   */
  size?: "small" | "medium";
}

const Toggle = forwardRef<HTMLInputElement, IToggleProps>(
  ({ disabled, color = "secondary", size = "medium", ...delegated }, ref) => {
    const { containerClasses } = useToggleClasses({ color, size });
    return (
      <div data-testId='k-toggle' ref={ref} className={containerClasses}>
        <input
          type="checkbox"
          disabled={disabled}
          {...delegated}
          role="switch"
          aria-checked={delegated.checked}
        />
        <span />
      </div>
    );
  }
);

export default Toggle;
