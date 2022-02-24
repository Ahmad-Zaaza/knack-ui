import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { TButtonProps } from "./Button";

const clsx = classnames.bind(styles);
const useButtonClasses = ({
  className,
  kind,
  variant,
  fullWidth,
  iconOnly,
  elevationAnimation
}: TButtonProps<"button">) => {
  const containerClasses = useMemo(
    () =>
      clsx(
        "btn",
        {
          "btn-primary": kind === "primary",
          "btn-secondary": kind === "secondary",
          "btn-primaryOutline": kind === "primaryOutline",
          "btn-secondaryOutline": kind === "secondaryOutline",
          "btn-tertiary": kind === "tertiary",
          "btn-ghost": kind === "ghost",
          "btn-danger": kind === "danger",
          "btn-default": kind === "default",
          "btn-defaultOutline": kind === "defaultOutline"
        },
        {
          "btn-sm": variant === "small" && !iconOnly,
          "btn-md": variant === "medium" && !iconOnly,
          "btn-icon-md": variant === "medium" && iconOnly,
          "btn-icon-sm": variant === "small" && iconOnly
        },
        {
          "w-full": fullWidth,
          "btn-icon": iconOnly,
          "no-btn-elev": !elevationAnimation
        },
        className
      ),
    [className, variant, fullWidth, kind, iconOnly]
  );

  return {
    containerClasses
  };
};

export default useButtonClasses;
