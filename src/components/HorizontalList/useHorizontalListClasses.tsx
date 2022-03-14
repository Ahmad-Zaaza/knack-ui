import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { IHorizontalListProps } from "./HorizontalList";

const clsx = classnames.bind(styles);
const useHorizontalListClasses = ({ className }: IHorizontalListProps) => {
  const containerClasses = useMemo(
    () => clsx("horizontal-list", className),
    [className]
  );
  const listArrowsClasses = useMemo(
    () => clsx("horizontal-list__arrows"),
    []
  );

  return {
    containerClasses,listArrowsClasses
  };
};

export default useHorizontalListClasses;
