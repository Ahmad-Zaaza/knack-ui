import {
  useMemo,
  ComponentPropsWithoutRef,
  forwardRef,
  CSSProperties
} from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";

const clsx = classnames.bind(styles);

/**
 * One limitation with Stack that it affects absolute children with `margin-top`
 */
export interface IStackProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Controls flex direction
   * @default 'row'
   */
  direction?: "column" | "row";
  /**
   * Controls `align-items` flex property
   * @default 'row'
   */
  alignItems?: CSSProperties["alignItems"];
  /**
   * Controls `justfify-content` flex property
   * @default 'row'
   */
  justifyContent?: CSSProperties["justifyContent"];
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
    {
      className,
      direction = "row",
      gap = 0,
      style,
      children,
      justifyContent,
      alignItems,
      ...delegated
    },
    ref
  ) => {
    const stackStyles = useMemo(() => ({ ...style }), [style]);
    const classes = useMemo(
      () =>
        clsx(
          "stack",
          {
            "s-column": direction === "column",
            "items-center": alignItems === "center",
            "items-start": alignItems === "flex-start",
            "items-end": alignItems === "flex-end",
            "justify-center": justifyContent === "center",
            "justify-start": justifyContent === "flex-start",
            "justify-end": justifyContent === "flex-end",
            "justify-between": justifyContent === "space-between",
            "justify-around": justifyContent === "space-around",
            "justify-evenly": justifyContent === "space-evenly",
            [`sc-spacing-${gap}`]: direction === "column",
            [`sr-spacing-${gap}`]: direction === "row"
          },

          className
        ),
      [gap, direction,className]
    );
    return (
      <div ref={ref} style={stackStyles} className={classes} {...delegated}>
        {children}
      </div>
    );
  }
);

export default Stack;
