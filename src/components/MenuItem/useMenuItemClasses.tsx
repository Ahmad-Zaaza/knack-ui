
import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { IMenuItemProps } from "./MenuItem";

const clsx = classnames.bind(styles);
const useMenuItemClasses = ({className}: IMenuItemProps) => {
  const containerClasses = useMemo(
    () =>
      clsx(className),
    [className ]
  );

  return {
    containerClasses
  };
};

export default useMenuItemClasses;
