import { useMemo } from "react";
import { useTheme } from "styled-components";
import { removeUndefinedKeys } from "../../utils/helpers";
import useBoxProps from "../Box/useBoxProps";
import { StackProps } from "./Stack";

// function getSize(size: string | number | undefined) {
//   if (typeof size !== "number") {
//     return size;
//   }
//   if (size < 1) {
//     return `${100 * size}%`;
//   }
//   if (size >= 1) {
//     return `${size}px`;
//   }
// }

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
  const theme = useTheme();
  const { indentStyles: boxIndentStyles, otherProps: boxProps } =
    useBoxProps(otherProps);
  if (!theme) {
    throw new Error(
      '<Stack /> must be inside <ThemeProvider /> with a value, import {ThemeProvider} from "knack-ui" '
    );
  }
  const indentStyles = useMemo(
    () =>
      calculateIndentStyles(
        { alignItems, direction, gap, justifyContent, inline, flexWrap },
        theme.scaleDenominator
      ),
    [alignItems, direction, gap, justifyContent, inline, flexWrap]
  );

  return {
    indentStyles: { ...indentStyles, ...boxIndentStyles },
    otherProps: { ...otherProps, ...boxProps }
  };
}
export default useStackProps;
