import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { ITextareaProps } from "./Textarea";

const clsx = classnames.bind(styles);
const useTextareaClasses = ({
  className,
  variant,
  error,
  inputClassName
}: ITextareaProps) => {
  const inputClasses = useMemo(
    () =>
      clsx(
        "input",
        {
          "input-sm": variant === "small",
          "input-error": Boolean(error)
        },
        inputClassName
      ),
    [variant, inputClassName, error]
  );
  const containerClasses = useMemo(
    () =>
      clsx(
        "input-container",

        className
      ),
    [className]
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
