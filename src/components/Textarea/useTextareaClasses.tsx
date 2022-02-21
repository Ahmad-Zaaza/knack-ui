import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { ITextareaProps } from "./Textarea";

const clsx = classnames.bind(styles);
const useTextareaClasses = ({
  className,
  variant,
  error,
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
        className
      ),
    [variant]
  );
  const containerClasses = useMemo(
    () =>
      clsx("input-container", {
        "input-disabled": disabled,
        "input-error": Boolean(error)
      }),
    [disabled, error]
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
