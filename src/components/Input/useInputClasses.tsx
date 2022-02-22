import { useMemo } from "react";
import classnames from "classnames/bind";
import { IInputProps } from "./Input";
import styles from "../../tailwind.css";

const clsx = classnames.bind(styles);
const useInputClasses = ({
  error,
  variant,
  className,
  disabled,
  inputClassname,
  inputPrefix: InputPrefix,
  inputSuffix: InputSuffux
}: IInputProps) => {
  const inputClasses = useMemo(
    () =>
      clsx(
        "input",
        {
          "input-sm": variant === "small",
          "input-lg": variant === "large"
        },
        inputClassname
      ),
    [variant, inputClassname]
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
  const prefixClasses = useMemo(
    () =>
      clsx("input-prefix", "input-adornment", {
        "input-prefix-lg": variant === "large",
        "input-prefix-sm": variant === "small"
      }),
    [variant]
  );
  const inputErrorWrapperClasses = useMemo(
    () => clsx("input-error-wrapper"),
    [error]
  );
  return {
    containerClasses,
    prefixClasses,
    inputClasses,
    inputErrorWrapperClasses
  };
};

export default useInputClasses;
