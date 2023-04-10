import { useMemo } from "react";
import { StackProps } from "./Stack";
import { calculateIndentStyles } from "../../utils/helpers";

function useStackProps({
  alignItems,
  direction,
  gap,
  justifyContent,
  display='flex',
  flexWrap,
  ...otherProps
}: StackProps) {



  const indentStyles = useMemo(
    () =>
      calculateIndentStyles({
        "align-items": alignItems,
        "flex-direction": direction,
        gap,
        "justify-content": justifyContent,
        display,
        "flex-wrap": flexWrap
      }),
    [alignItems, direction, gap, justifyContent, display, flexWrap]
  );

  return {
    indentStyles: { ...indentStyles },
    otherProps: { ...otherProps }
  };
}
export default useStackProps;
