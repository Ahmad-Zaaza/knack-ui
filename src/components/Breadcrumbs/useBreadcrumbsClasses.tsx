import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { IBreadcrumbsProps } from "./Breadcrumbs";

const clsx = classnames.bind(styles);
const useBreadcrumbsClasses = ({
  className
}: Pick<IBreadcrumbsProps, "className">) => {
  const containerClasses = useMemo(
    () => clsx("breadcrumbs", className),
    [className]
  );
  const crumbClasses = useMemo(() => clsx("crumb"), []);

  return {
    containerClasses,
    crumbClasses
  };
};

export default useBreadcrumbsClasses;
