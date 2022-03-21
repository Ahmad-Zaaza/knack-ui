import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { IRadioProps } from "./Radio";

const clsx = classnames.bind(styles);
const useRadioClasses = ({ size, color, icon }: IRadioProps) => {
  const containerClasses = useMemo(
    () =>
      clsx("radio-container", {
        "radio-sm": size === "small",
        "radio-lg": size === "large",

        "radio-check-sm": size === "small" && icon === "checkmark",
        "radio-check-lg": size === "large" && icon === "checkmark",
        "radio-circle-sm": size === "small" && icon === "circle",
        "radio-circle-lg": size === "large" && icon === "circle",
        "radio-circle": icon === "circle",
        "text-secondary": color === "secondary",
        "text-primary": color === "primary"
      }),
    [size, color, icon]
  );

  return {
    containerClasses
  };
};

export default useRadioClasses;
