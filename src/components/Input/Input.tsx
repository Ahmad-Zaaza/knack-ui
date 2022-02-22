import { ComponentPropsWithoutRef, forwardRef } from "react";
import useInputClasses from "./useInputClasses";

export interface IInputProps extends ComponentPropsWithoutRef<"input"> {
  /**
   * Input size.
   * @default 'default'
   */
  variant?: "small" | "default" | "large";
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
  className: string;
  /**
   * className applied to input element
   */
  inputClassname: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      variant = "default",
      className,
      error,
      inputClassname,
      inputPrefix: InputPrefix,
      inputSuffix: InputSuffux,
      disabled,
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
      className,
      inputClassname,
      inputPrefix: InputPrefix,
      inputSuffix: InputSuffux
    });

    return (
      <div>
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
      </div>
    );
  }
);

export default Input;
