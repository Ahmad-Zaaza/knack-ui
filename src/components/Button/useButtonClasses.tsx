import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { ButtonProps } from "./Button";

const clsx = classnames.bind(styles);
const useButtonClasses = ({
  className,
  kind,
  variant,
  shape,
  fullWidth,
  iconOnly,
  elevationAnimation
}: Omit<ButtonProps, "children"> & { className?: string }) => {
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
          "btn-defaultOutline": kind === "defaultOutline",
          "btn-warning": kind === "warning",
          "btn-success": kind === "success"
        },
        {
          "btn-sm": variant === "small" && !iconOnly,
          "btn-md": variant === "medium" && !iconOnly,
          "btn-lg": variant === "large" && !iconOnly,
          "btn-icon-lg": variant === "large" && iconOnly,
          "btn-icon-md": variant === "medium" && iconOnly,
          "btn-icon-sm": variant === "small" && iconOnly
        },
        {
          "w-full": fullWidth,
          "btn-icon": iconOnly,
          "no-btn-elev": !elevationAnimation,
          "btn-rounded": shape==='rounded',
          "btn-square": shape==='square'
        },
        className
      ),
    [className, variant, fullWidth, kind, iconOnly, shape]
  );
  const startIconClasses = useMemo(() => clsx("btn-startIcon"), []);

  return {
    containerClasses,
    startIconClasses
  };
};

export default useButtonClasses;
