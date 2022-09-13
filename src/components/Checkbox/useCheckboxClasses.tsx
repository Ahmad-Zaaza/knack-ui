import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { ICheckboxProps } from "./Checkbox";

const clsx = classnames.bind(styles);
const useCheckboxClasses = ({ size, color }: ICheckboxProps) => {
  const containerClasses = useMemo(
    () =>
      clsx("checkbox-container", {
        "checkbox-sm": size === "small",
        "checkbox-lg": size === "large",
        "text-secondary": color === "secondary",
        "text-primary": color === "primary"
      }),
    [size, color]
  );

  return {
    containerClasses
  };
};

export default useCheckboxClasses;
