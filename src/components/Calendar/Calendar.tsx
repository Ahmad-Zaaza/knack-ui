import { ComponentPropsWithoutRef, forwardRef } from "react";
import useCalendarClasses from "./useCalendarClasses";

export interface ICalendarProps extends ComponentPropsWithoutRef<"div"> {}

const Calendar = forwardRef<HTMLDivElement, ICalendarProps>(
  ({ className, ...delegated }, ref) => {
    const { containerClasses, rowClasses } = useCalendarClasses({
      className
    });
    return (
      <div ref={ref} className={containerClasses} {...delegated}>
        <div className={rowClasses} />
      </div>
    );
  }
);

export default Calendar;
