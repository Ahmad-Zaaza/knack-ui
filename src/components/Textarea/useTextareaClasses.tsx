import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { ITextareaProps } from "./Textarea";

const clsx = classnames.bind(styles);
const useTextareaClasses = ({
  className,
  variant,
  error,
  inputClassName,
  disabled
}: ITextareaProps) => {
  const inputClasses = useMemo(
    () =>
      clsx(
        "input",
        {
          "input-sm": variant === "small",
          "input-lg": variant === "large"
        },
        inputClassName
      ),
    [variant, inputClassName]
  );
  const containerClasses = useMemo(
    () =>
      clsx(
        "input-container",
        {
          "input-disabled": disabled,
          "input-error": Boolean(error)
        },
        className
      ),
    [disabled, error, className]
  );
  const inputErrorWrapperClasses = useMemo(
    () => clsx("input-error-wrapper"),
    [error]
  );
  return {
    containerClasses,
    inputClasses,
    inputErrorWrapperClasses
  };
};

export default useTextareaClasses;
