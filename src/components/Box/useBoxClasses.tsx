import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { BoxProps } from "./Box";

const clsx = classnames.bind(styles);
const useBoxClasses = ({
  className,
  variant,
  elevation,
  paddingPreset,
  square
}: BoxProps) => {
  const containerClasses = useMemo(
    () =>
      clsx(
        "box",
        {
          "elevation-1": elevation === 1 && variant === "elevated",
          "elevation-2": elevation === 2 && variant === "elevated",
          "elevation-3": elevation === 3 && variant === "elevated",
          "elevation-4": elevation === 4 && variant === "elevated",
          "elevation-6": elevation === 6 && variant === "elevated"
        },
        {
          border: variant === "outlined",
          "bg-elevation-1": variant === "elevated" && elevation === 1,
          "rounded-none": square,
          "box-card-p": paddingPreset === "card"
        },
        className
      ),
    [className, elevation, square, variant]
  );

  return {
    containerClasses
  };
};

export default useBoxClasses;
