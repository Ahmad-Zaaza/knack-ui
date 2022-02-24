import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { IAvatarProps } from "./Avatar";

const clsx = classnames.bind(styles);
const useAvatarClasses = ({
  className,
  size,
  color
}: Omit<IAvatarProps, "text">) => {
  const containerClasses = useMemo(
    () =>
      clsx(
        "avatar",
        {
          "avatar-sm": size === "small",
          "avatar-md": size === "medium",
          "avatar-lg": size === "large"
        },
        {
          "avatar-primary": color === "primary",
          "avatar-secondary": color === "secondary"
        },
        className
      ),
    [className, size]
  );
  const imageClasses = useMemo(() => clsx("avatar-img"), []);

  return {
    containerClasses,
    imageClasses
  };
};

export default useAvatarClasses;
