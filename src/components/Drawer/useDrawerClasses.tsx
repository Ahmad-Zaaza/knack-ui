import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { IDrawerProps } from "./Drawer";

const clsx = classnames.bind(styles);
const useDrawerClasses = ({
  className,
  active,
  position,
  isOpen
}: Omit<IDrawerProps, "onClose"> & { active: boolean }) => {
  const containerClasses = useMemo(
    () =>
      clsx(
        "drawer",
        { "drawer-active": isOpen && active },
        { "drawer-start": position === "start" },
        { "drawer-end": position === "end" },
        { "drawer-top": position === "top" },
        { "drawer-bottom": position === "bottom" },
        className
      ),
    [className, isOpen, active, position]
  );

  return {
    containerClasses
  };
};

export default useDrawerClasses;
