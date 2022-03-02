import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";

const clsx = classnames.bind(styles);
const useMenuItemClasses = ({ className }: { className?: string }) => {
  const containerClasses = useMemo(() => clsx(className), [className]);

  return {
    containerClasses
  };
};

export default useMenuItemClasses;
