import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { IAvatargroupProps } from "./AvatarGroup";

const clsx = classnames.bind(styles);
const useAvatarGroupClasses = ({ className }: IAvatargroupProps) => {
  const containerClasses = useMemo(
    () => clsx("avatar-group", className),
    [className]
  );

  return {
    containerClasses
  };
};

export default useAvatarGroupClasses;
