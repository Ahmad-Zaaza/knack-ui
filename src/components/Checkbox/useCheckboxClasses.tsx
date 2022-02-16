import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { ICheckboxProps } from "./Checkbox";

const clsx = classnames.bind(styles);
const useCheckboxClasses = ({ disabled, size }: ICheckboxProps) => {
  const containerClasses = useMemo(
    () =>
      clsx("checkbox-container", {
        "input-disabled": disabled,
        "checkbox-sm": size === "small",
        "checkbox-lg": size === "large"
      }),
    [disabled, size]
  );

  return {
    containerClasses
  };
};

export default useCheckboxClasses;
