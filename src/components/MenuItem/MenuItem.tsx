import { forwardRef } from "react";
import { Button } from "..";

import useMenuItemClasses from "./useMenuItemClasses";
import * as Polymorphic from "../../types/helpers";

const MenuItem = forwardRef(
  ({ className, children, as: Comp = Button, ...delegated }, ref) => {
    const { containerClasses } = useMenuItemClasses({ className });
    return (
      <Comp
        ref={ref}
        className={containerClasses}
        role="menuitem"
        tabIndex={-1}
        {...delegated}
      >
        {children}
      </Comp>
    );
  }
) as Polymorphic.ForwardRefComponent<typeof Button, {}>;

export default MenuItem;
