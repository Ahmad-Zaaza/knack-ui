
import { useMemo, ComponentPropsWithoutRef, forwardRef } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";

const clsx = classnames.bind(styles);
export interface IStackProps extends ComponentPropsWithoutRef<"div"> {
  
}

const Stack = forwardRef<HTMLDivElement, IStackProps>(
  ({ className, ...delegated }, ref) => {
    const classes = useMemo(
      () =>
        clsx(
          className
        ),
      []
    );
    return (
      <div ref={ref} className={classes} {...delegated}>Hi</div>
    );
  }
);

export default Stack;

