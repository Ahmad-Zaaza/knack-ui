import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";

const clsx = classnames.bind(styles);
const useHorizontalListClasses = ({ className }: { className?: string }) => {
  const containerClasses = useMemo(
    () => clsx("horizontal-list__container"),
    []
  );

  const horizontalListScrollerClasses = useMemo(
    () => clsx("horizontal-list_scroller", className),
    [className]
  );
  const prevBtnClasses = useMemo(() => clsx("horizontal-list__prev-btn"), []);
  const nextBtnClasses = useMemo(() => clsx("horizontal-list__next-btn"), []);

  return {
    containerClasses,

    nextBtnClasses,
    prevBtnClasses,
    horizontalListScrollerClasses
  };
};

export default useHorizontalListClasses;
