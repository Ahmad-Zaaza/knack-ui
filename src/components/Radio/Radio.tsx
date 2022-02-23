import { ComponentPropsWithoutRef, forwardRef } from "react";
import useRadioClasses from "./useRadioClasses";

export interface IRadioProps
  extends Omit<
    ComponentPropsWithoutRef<"input">,
    "type" | "className" | "size"
  > {
  /**
   * Controls the size of the radio button.
   *
   */
  size?: "small" | "default" | "large";
  /**
   * Controls whether or not the radio is checked.
   *
   */
  checked?: boolean;
  /**
   * Controls whether or not the radio is disabled.
   *
   */
  disabled?: boolean;
  /**
   * Controls the color of the radio.
   *
   * Only `primary` and `secondary` are supported for now waiting for feedback.
   *
   */
  color?: "primary" | "secondary";
}

const Radio = forwardRef<HTMLInputElement, IRadioProps>(
  ({ size = "default", color='primary', ...delegated }, ref) => {
    const { containerClasses } = useRadioClasses({
      size,
      color
    });
    return (
      <span className={containerClasses}>
        <input
          ref={ref}
          {...delegated}
          aria-checked={delegated.checked}
          type="radio"
        />

        <span aria-hidden />
      </span>
    );
  }
);

export default Radio;
