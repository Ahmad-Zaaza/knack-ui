import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { TButtonProps } from "./Button";

const clsx = classnames.bind(styles);
const useButtonClasses = ({
  className,
  size,
  variant,
}: TButtonProps<"button">) => {
  const containerClasses = useMemo(
    () =>
      clsx(
        "btn",
        {
          "btn-primary": variant === "primary",
          "btn-secondary": variant === "secondary"
        },
        {
          "btn-sm": size === "small",
          "btn-md": size === "medium"
        },
        className
      ),
    [className, variant, size]
  );

  return {
    containerClasses
  };
};

export default useButtonClasses;
