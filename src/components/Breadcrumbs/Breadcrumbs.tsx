/* eslint-disable react/no-array-index-key */
import React, {
  cloneElement,
  ComponentPropsWithoutRef,
  forwardRef,
  isValidElement
} from "react";
import Crumb from "./Crumb";
import useBreadcrumbsClasses from "./useBreadcrumbsClasses";

export interface IBreadcrumbsProps extends ComponentPropsWithoutRef<"nav"> {}
const Arrow = () => (
  <svg
    width="7"
    height="12"
    viewBox="0 0 7 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.3 6C6.29566 5.85699 6.24134 5.71525 6.13676 5.60596L1.65296 0.921015C1.43539 0.692995 1.08188 0.692995 0.863654 0.921015C0.645445 1.14835 0.645445 1.51773 0.863654 1.74573L4.93526 6L0.863654 10.2543C0.645445 10.4823 0.645445 10.8516 0.863654 11.079C1.08188 11.307 1.43536 11.307 1.65296 11.079L6.13676 6.39404C6.24135 6.28476 6.29567 6.14301 6.3 6Z"
      fill="#A9AFB5"
    />
  </svg>
);
const Breadcrumbs = forwardRef<HTMLDivElement, IBreadcrumbsProps>(
  ({ className, children, ...delegated }, ref) => {
    const { containerClasses } = useBreadcrumbsClasses({ className });
    return (
      <nav aria-label="Breadcrumb" ref={ref} {...delegated}>
        <ol className={containerClasses}>
          {React.Children.map(children, (child, i) => {
            if (isValidElement(child)) {
              return <Crumb key={i}>{cloneElement(child)}</Crumb>;
            }
            return null;
            // @ts-ignore
          })?.reduce((prev, curr) => [prev, <Arrow key={Math.random} />, curr])}
        </ol>
      </nav>
    );
  }
);

export default Breadcrumbs;
