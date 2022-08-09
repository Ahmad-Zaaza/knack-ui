import { ComponentPropsWithoutRef, forwardRef } from "react";
import useBreadcrumbsClasses from "./useBreadcrumbsClasses";

export interface ICrumbProps extends ComponentPropsWithoutRef<"li"> {}

const Crumb = forwardRef<HTMLLIElement, ICrumbProps>(
  ({ className, children, ...delegated }, ref) => {
    const { crumbClasses } = useBreadcrumbsClasses({ className });
    return (
      <li className={crumbClasses} ref={ref} {...delegated}>
        {children}
      </li>
    );
  }
);

export default Crumb;
