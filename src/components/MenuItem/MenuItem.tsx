import { forwardRef } from "react";
import { Button } from "..";
import { TButtonProps } from "../Button/Button";
import useMenuItemClasses from "./useMenuItemClasses";

export interface IMenuItemProps extends TButtonProps<"li" | "a"> {}

const MenuItem = forwardRef<HTMLLIElement | HTMLAnchorElement, IMenuItemProps>(
  ({ className, children, ...delegated }, ref) => {
    const { containerClasses } = useMenuItemClasses({ className });
    return (
      <Button
        kind="ghost"
        ref={ref as any}
        className={containerClasses}
        role="menuitem"
        tabIndex={-1}
        {...delegated}
      >
        {children}
      </Button>
    );
  }
);

export default MenuItem;
