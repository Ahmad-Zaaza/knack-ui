import { useMemo } from "react";
import classnames from "classnames/bind";
import { IInputProps } from "./Input";
import styles from "../../tailwind.css";

const clsx = classnames.bind(styles);
const useInputClasses = ({
  error,
  variant,
  className,
  size,
  disabled,
  inputClassName,
  inputPrefix: InputPrefix,
  inputSuffix: InputSuffux
}: IInputProps) => {
  const inputClasses = useMemo(
    () =>
      clsx(
        "input",
        {
          "input-xs": size === "xsmall",
          "input-sm": size === "small",
          "input-md": size === "default",
          "input-filled": variant === "filled"
        },
        inputClassName
      ),
    [size, inputClassName, variant]
  );
  const containerClasses = useMemo(
    () =>
      clsx(
        "input-container",
        {
          "a-input": Boolean(InputPrefix) || Boolean(InputSuffux),
          "input-disabled": disabled,
          "input-error": Boolean(error)
        },
        className
      ),
    [InputPrefix, InputSuffux, disabled, error, className]
  );
  const inputAdornmentClasses = useMemo(
    () =>
      clsx("input-adornment", {
        "input-adornment-md": size === "default",
        "input-adornment-sm": size === "small" || size === "xsmall",
      }),
    [size]
  );
  const inputErrorWrapperClasses = useMemo(
    () => clsx("input-error-wrapper"),
    []
  );
  return {
    containerClasses,
    inputAdornmentClasses,
    inputClasses,
    inputErrorWrapperClasses
  };
};

export default useInputClasses;
