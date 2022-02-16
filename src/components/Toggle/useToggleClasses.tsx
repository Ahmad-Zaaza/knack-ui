import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { IToggleProps } from "./Toggle";

const clsx = classnames.bind(styles);
const useToggleClasses = ({  color, size }: IToggleProps) => {
  const containerClasses = useMemo(
    () =>
      clsx("toggle", {
        "text-secondary": color === "secondary",
        "text-primary": color === "primary",
        "toggle-sm": size === "small"
      }),
    [ color, size]
  );

  return {
    containerClasses
  };
};

export default useToggleClasses;
