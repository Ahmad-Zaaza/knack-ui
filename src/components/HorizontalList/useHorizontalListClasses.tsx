import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";

const clsx = classnames.bind(styles);
const useHorizontalListClasses = ({ className }: { className?: string }) => {
  const containerClasses = useMemo(
    () => clsx("horizontal-list__container"),
    []
  );
  const horizontalListClasses = useMemo(
    () => clsx("horizontal-list", className),
    [className]
  );
  const listArrowsClasses = useMemo(() => clsx("horizontal-list__arrows"), []);

  return {
    containerClasses,
    listArrowsClasses,
    horizontalListClasses
  };
};

export default useHorizontalListClasses;
