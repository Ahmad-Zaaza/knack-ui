import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { useMenuContext } from "../Menu/Menu";

const clsx = classnames.bind(styles);
const useMenuListClasses = ({ className }: { className?: string }) => {
  const { active, open } = useMenuContext();
  const containerClasses = useMemo(
    () =>
      clsx("menu-list", { "menu-list--active": open && active }, className),
    [open, active, className]
  );

  return {
    containerClasses
  };
};

export default useMenuListClasses;
