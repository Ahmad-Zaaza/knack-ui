import { forwardRef, useEffect } from "react";
import composeRefs from "@seznam/compose-react-refs";
import { Button } from "..";
import { TButtonProps } from "../Button/Button";
import { useMenuContext } from "../Menu/Menu";
import useGetBoundingClientRect from "../../utils/useGetBoundingClientRect";

const ButtonMenu = forwardRef<HTMLButtonElement, TButtonProps<"button">>(
  (
    {
      children,

      ...delegated
    },
    ref
  ) => {
    const { setPopoverPosition, setOpen } = useMenuContext();

    const [rect, buttonRef] = useGetBoundingClientRect<HTMLButtonElement>();
    // console.log({ rect });
    useEffect(() => {
      setPopoverPosition({
        top: rect?.top.toString(),
        bottom: rect?.bottom.toString(),
        left: rect?.left.toString(),
        right: rect?.right.toString()
      });
    }, [rect]);
    return (
      <Button
        as="button"
        ref={composeRefs(buttonRef, ref)}
        {...delegated}
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>
    );
  }
);

export default ButtonMenu;
