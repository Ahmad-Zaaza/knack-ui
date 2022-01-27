import { useMemo, ComponentPropsWithoutRef, forwardRef } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";

const clsx = classnames.bind(styles);
export interface IButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant: "primary" | "secondary";
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ variant, className, children, ...delegated }, ref) => {
    const classes = useMemo(
      () =>
        clsx(
          "p-4",
          {
            "bg-primary": variant === "primary",
            "bg-secondary": variant === "secondary"
          },
          className
        ),
      [variant]
    );
    return (
      <button ref={ref} className={classes} {...delegated}>
        {children}
      </button>
    );
  }
);

export default Button;
