import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { ICalendarProps } from "./Calendar";

const clsx = classnames.bind(styles);
const useCalendarClasses = ({ className }: ICalendarProps) => {
  const containerClasses = useMemo(
    () => clsx("calendar__conntainer", className),
    [className]
  );
  const rowClasses = useMemo(
    () => clsx("calendar__row"),
    []
  );
  const cellClasses = useMemo(
    () => clsx("calendar__cell"),
    []
  );

  return {
    containerClasses,
    rowClasses,cellClasses
  };
};

export default useCalendarClasses;
