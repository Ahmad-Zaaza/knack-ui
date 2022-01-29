import { useMemo, ComponentPropsWithoutRef, forwardRef } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";

const clsx = classnames.bind(styles);
export interface IInputProps extends ComponentPropsWithoutRef<"input"> {
  variant?: "small" | "large";
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ variant, className, ...delegated }, ref) => {
    const classes = useMemo(
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
    return (
      <input ref={ref} className={classes} {...delegated}/>
      
    );
  }
);

export default Input;
