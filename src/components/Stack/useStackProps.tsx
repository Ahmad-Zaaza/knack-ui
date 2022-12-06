import { useMemo } from "react";
import { removeUndefinedKeys } from "../../utils/helpers";
import useKnackTheme from "../../utils/useTheme";
import { StackProps } from "./Stack";

export const getAutoOrScaleIndent = (
  indent: number | string | undefined,
  scaleIndent: number
) => {
  if (typeof indent === "string") {
    return indent;
  }
  if (typeof indent === "number" && indent > -1 && indent < 1) {
    return `${100 * indent}%`;
  }
  if (typeof indent === "number" && (indent >= 1 || indent <= -1)) {
    return `${indent * scaleIndent}px`;
  }
  return indent;
};

function calculateIndentStyles(props: StackProps, scaleDenominator: number) {
  return removeUndefinedKeys({
    "align-items": props.alignItems,
    "justify-content": props.justifyContent,
    "flex-direction": props.direction,
    gap: getAutoOrScaleIndent(props.gap, scaleDenominator),
    display: props.inline ? "inline-flex" : "flex",
    "flex-wrap": props.flexWrap
  });
}

function useStackProps({
  alignItems,
  direction,
  gap,
  justifyContent,
  inline,
  flexWrap,
  ...otherProps
}: StackProps) {
  const theme = useKnackTheme();

  const indentStyles = useMemo(
    () =>
      calculateIndentStyles(
        { alignItems, direction, gap, justifyContent, inline, flexWrap },
        theme.scaleDenominator
      ),
    [alignItems, direction, gap, justifyContent, inline, flexWrap]
  );

  return {
    indentStyles: { ...indentStyles },
    otherProps: { ...otherProps }
  };
}
export default useStackProps;
