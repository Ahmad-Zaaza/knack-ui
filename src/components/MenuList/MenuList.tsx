import { forwardRef } from "react";
import { Box } from "..";
import { TBoxProps } from "../Box/Box";
import { useMenuContext } from "../Menu/Menu";
import { Popover } from "../Popover";
import useMenuListClasses from "./useMenuListClasses";

export interface IMenuListProps extends TBoxProps<"ul"> {}
// Maybe pass a parentRef here instead of doing a context
const MenuList = forwardRef<HTMLUListElement, IMenuListProps>(
  ({ className, children, ...delegated }, ref) => {
    const { containerClasses } = useMenuListClasses({ className });
    const { open, active, setActive, setOpen, popoverPosition } =
      useMenuContext();
    // console.log({ popoverPosition });

    return (
      <Popover
        isOpen={open}
        onClose={() => setOpen(false)}
        position={popoverPosition}
        setActive={setActive}
        active={active}
      >
        <Box as="ul" ref={ref} className={containerClasses} {...delegated}>
          {children}
        </Box>
      </Popover>
    );
  }
);

export default MenuList;
