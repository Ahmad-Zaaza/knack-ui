import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { ChipProps } from "./Chip";

const clsx = classnames.bind(styles);
const useChipClasses = ({ className, variant, size, shape }: ChipProps) => {
  const containerClasses = useMemo(
    () =>
      clsx(
        "chip",
        {
          "chip-primary": variant === "primary",
          "chip-secondary": variant === "secondary",
          "chip-primaryOutline": variant === "primaryOutline",
          "chip-secondaryOutline": variant === "secondaryOutline",
          "chip-tertiary": variant === "tertiary",
          "chip-warning": variant === "warning",
          "chip-success": variant === "success",
          "chip-danger": variant === "danger"
        },
        {
          "chip-sm": size === "small",
          "chip-md": size === "medium",
          "chip-square": shape === "square",
          "chip-rounded": shape === "rounded"
        },

        className
      ),
    [className, variant, size, shape]
  );

  return {
    containerClasses
  };
};

export default useChipClasses;
