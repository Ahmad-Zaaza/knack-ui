import { useMemo, ComponentPropsWithoutRef, forwardRef } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";

const clsx = classnames.bind(styles);
export interface IStackProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Flex direction
   * @default 'row'
   */
  direction?: "column" | "row";
  /**
   * Spacing between items, from 1 to 10, measures by `number * 0.25rem`
   *
   * @example <caption>Spacing of 0.5rem between elements</caption>
   *
   *  gap={2} === gap= 2 * 0.25rem
   * @default 0
   */
  gap?: number;
}

const Stack = forwardRef<HTMLDivElement, IStackProps>(
  (
    { className, direction = "row", gap = 0, style, children, ...delegated },
    ref
  ) => {
    const stackStyles = useMemo(() => ({ ...style }), [style]);
    const classes = useMemo(
      () =>
        clsx(
          "stack",
          {
            "s-column": direction === "column",
            [`sc-spacing-${gap}`]: direction === "column",
            [`sr-spacing-${gap}`]: direction === "row"
          },

          className
        ),
      [gap, direction]
    );
    return (
      <div ref={ref} style={stackStyles} className={classes} {...delegated}>
        {children}
      </div>
    );
  }
);

export default Stack;
