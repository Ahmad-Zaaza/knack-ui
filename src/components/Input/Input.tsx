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
  error?: boolean | string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      variant = "default",
      className,
      error,
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
          <span className={inputErrorWrapperClasses}>{error}</span>
        ) : null}
      </div>
    );
  }
);

export default Input;
