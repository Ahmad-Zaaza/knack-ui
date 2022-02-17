import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { IRadioProps } from "./Radio";

const clsx = classnames.bind(styles);
const useRadioClasses = ({ size, color }: IRadioProps) => {
  const containerClasses = useMemo(
    () =>
      clsx("radio-container", {
        "radio-sm": size === "small",
        "radio-lg": size === "large",
        "text-secondary": color === "secondary",
        "text-primary": color === "primary"
      }),
    [size, color]
  );

  return {
    containerClasses
  };
};

export default useRadioClasses;
