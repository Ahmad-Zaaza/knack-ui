import { ComponentPropsWithoutRef, forwardRef } from "react";
import useInputClasses from "./useInputClasses";

export interface IInputProps
  extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
  /**
   * Input size.
   * @default 'default'
   */
  size?: "small" | "default";
  /**
   * Input prefix. Can be a symbol or an icon. colored by primary color
   */
  inputPrefix?: JSX.Element;
  /**
   * Input suffix. Can be a symbol or an icon. colored by primary color
   */
  inputSuffix?: JSX.Element;
  /**
   * Toggle input error state by providing a `boolean` to error text directly
   */
  error?: boolean | string;
  /**
   * className applied to input container
   */
  className?: string;
  /**
   * className applied to input element
   */
  inputClassName?: string;
  /**
   * input variant
   */
  variant?: "standard" | "filled";
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      variant = "standard",
      className,
      error,
      inputClassName,
      inputPrefix: InputPrefix,
      inputSuffix: InputSuffux,
      disabled,
      size = "default",
      ...delegated
    },
    ref
  ) => {
    const {
      containerClasses,
      inputClasses,
      inputAdornmentClasses,
      inputErrorWrapperClasses
    } = useInputClasses({
      error,
      disabled,
      variant,
      size,
      className,
      inputClassName,
      inputPrefix: InputPrefix,
      inputSuffix: InputSuffux
    });

    const sizes = {
      small: {
        height: 28,
        iconSize: 24,
        padding: 8
      },
      default: {
        height: 36,
        iconSize: 36,
        padding: 12
      }
    };

    return (
      <>
        <div
          style={{
            // @ts-ignore
            "--input-height": `${sizes[size].height}px`,
            "--icon-size": `${sizes[size].iconSize}px`,
            "--padding": `${sizes[size].padding}px`,
         
          }}
          className={containerClasses}
        >
          {InputPrefix ? (
            <div className={inputAdornmentClasses}>{InputPrefix}</div>
          ) : null}
          <input
            ref={ref}
            className={inputClasses}
            disabled={disabled}
            {...delegated}
          />
          {InputSuffux ? (
            <div className={inputAdornmentClasses}>{InputSuffux}</div>
          ) : null}
        </div>
        {typeof error === "string" ? (
          <span role="alert" className={inputErrorWrapperClasses}>
            {error}
          </span>
        ) : null}
      </>
    );
  }
);

export default Input;
