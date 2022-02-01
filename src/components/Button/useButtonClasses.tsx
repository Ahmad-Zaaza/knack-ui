
import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { IButtonProps } from "./Button";

const clsx = classnames.bind(styles);
const useButtonClasses = ({ className}: IButtonProps) => {
  const containerClasses = useMemo(
    () =>
      clsx(className),
    []
  );

  return {
    containerClasses
  };
};

export default useButtonClasses;
