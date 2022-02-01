import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { ICheckboxProps } from "./Checkbox";

const clsx = classnames.bind(styles);
const useCheckboxClasses = ({ disabled, variant }: ICheckboxProps) => {
  const containerClasses = useMemo(
    () =>
      clsx("checkbox-container", {
        "input-disabled": disabled,
        "checkbox-sm": variant === "small",
        "checkbox-lg": variant === "large"
      }),
    [disabled, variant]
  );

  return {
    containerClasses
  };
};

export default useCheckboxClasses;
