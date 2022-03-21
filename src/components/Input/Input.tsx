import { ComponentPropsWithoutRef, forwardRef } from "react";
import useInputClasses from "./useInputClasses";

export interface IInputProps
  extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
  /**
   * Input size.
   * @default 'default'
   */
  size?: "small" | "default" | "large";
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
  variant?: 'standard' | 'filled';
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
      size="default",
      ...delegated
    },
    ref
  ) => {
    const {
      containerClasses,
      inputClasses,
      prefixClasses,
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

    return (
      <>
        <div className={containerClasses}>
          {InputPrefix ? (
            <div className={prefixClasses}>{InputPrefix}</div>
          ) : null}
          <input
            ref={ref}
            className={inputClasses}
            disabled={disabled}
            {...delegated}
          />
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
