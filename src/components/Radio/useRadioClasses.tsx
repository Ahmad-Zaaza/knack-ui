
import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { IRadioProps } from "./Radio";

const clsx = classnames.bind(styles);
const useRadioClasses = ({className}: IRadioProps) => {
  const containerClasses = useMemo(
    () =>
      clsx(className),
    []
  );

  return {
    containerClasses
  };
};

export default useRadioClasses;
