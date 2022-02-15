import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import {
  TypographyColors,
  TypographyFontWeight,
  TypographyVariants
} from "./Typography";

const clsx = classnames.bind(styles);
const useTypographyClasses = ({
  className,
  variant,
  fontWeight,
  color
}: {
  className?: string;
  variant?: TypographyVariants;
  color?: TypographyColors;
  fontWeight?: TypographyFontWeight;
}) => {
  const typographyClasses = useMemo(
    () =>
      clsx(
        {
          "text-h1": variant === "h1",
          "font-bold":
            ["h1", "h2", "h3", "h4", "h5", "h6"].includes(variant!) &&
            !fontWeight,
          "font-medium":
            ["button", "caption"].includes(variant!) && !fontWeight,
          "text-h2": variant === "h2",
          "text-h3": variant === "h3",
          "text-h4": variant === "h4",
          "text-h5": variant === "h5",
          "text-h6": variant === "h6",
          "text-body1": variant === "body1",
          "text-body2": variant === "body2",
          "text-subtitle1": variant === "subtitle1",
          "text-subtitle2": variant === "subtitle2",
          "text-caption": variant === "caption",
          "text-button": variant === "button"
        },
        {
          "text-primary": color === "primary",
          "text-secondary": color === "secondary",
          "text-muted": color === "muted",
          "text-main": !color
        },
        {
          "font-bold": fontWeight === "bold",
          "font-semibold": fontWeight === "semibold",
          "font-light": fontWeight === "light",
          "font-medium": fontWeight === "medium"
        },
        className
      ),
    [className, color, variant, fontWeight]
  );

  return {
    typographyClasses
  };
};

export default useTypographyClasses;
