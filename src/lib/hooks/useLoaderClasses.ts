import classnames from "classnames/bind";
import { useMemo } from "react";
import styles from "../../tailwind.css";

const clsx = classnames.bind(styles);

export type LoaderTypes = "Dual Ring";

interface IProps {
  loader: LoaderTypes;
}

const useLoaderClasses = ({ loader }: IProps) => {
  const loadersClasses = useMemo(
    () => clsx({ "dual-ring-loader": loader === "Dual Ring" }),
    [loader]
  );
  return loadersClasses;
};

export default useLoaderClasses;
