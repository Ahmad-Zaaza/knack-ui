import { useMemo } from "react";
import { useTheme } from "styled-components";
import { removeUndefinedKeys } from "../../utils/helpers";
import { IBoxProps } from "./Box.types";

function getSize(size: string | number | undefined) {
  if (typeof size !== "number") {
    return size;
  }
  if (size < 1) {
    return `${100 * size}%`;
  }
  if (size >= 1) {
    return `${size}px`;
  }
}

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

function calculateIndentStyles(props: IBoxProps, scaleDenominator: number) {
  return removeUndefinedKeys({
    display: props.display,
    top: getSize(props.top),
    bottom: getSize(props.bottom),
    left: getSize(props.left),
    right: getSize(props.right),
    position: props.position,
    margin: getAutoOrScaleIndent(props.m, scaleDenominator),
    "margin-right":
      getAutoOrScaleIndent(props.mr, scaleDenominator) ||
      getAutoOrScaleIndent(props.mx, scaleDenominator),
    "margin-left":
      getAutoOrScaleIndent(props.ml, scaleDenominator) ||
      getAutoOrScaleIndent(props.mx, scaleDenominator),
    "margin-top":
      getAutoOrScaleIndent(props.mt, scaleDenominator) ||
      getAutoOrScaleIndent(props.my, scaleDenominator),
    "margin-bottom":
      getAutoOrScaleIndent(props.mb, scaleDenominator) ||
      getAutoOrScaleIndent(props.my, scaleDenominator),
    padding: getAutoOrScaleIndent(props.p, scaleDenominator),
    "padding-right":
      getAutoOrScaleIndent(props.pr, scaleDenominator) ||
      getAutoOrScaleIndent(props.px, scaleDenominator),
    "padding-left":
      getAutoOrScaleIndent(props.pl, scaleDenominator) ||
      getAutoOrScaleIndent(props.px, scaleDenominator),
    "padding-top":
      getAutoOrScaleIndent(props.pt, scaleDenominator) ||
      getAutoOrScaleIndent(props.py, scaleDenominator),
    "padding-bottom":
      getAutoOrScaleIndent(props.pb, scaleDenominator) ||
      getAutoOrScaleIndent(props.py, scaleDenominator),
    width: getAutoOrScaleIndent(props.w, scaleDenominator),
    "min-width": getAutoOrScaleIndent(props.wMin, scaleDenominator),
    "max-width": getAutoOrScaleIndent(props.wMax, scaleDenominator),
    "min-height": getAutoOrScaleIndent(props.hMin, scaleDenominator),
    "max-height": getAutoOrScaleIndent(props.hMax, scaleDenominator),
    "z-index": props.zIndex,
    flex: props.flex
  });
}

function useBoxProps({
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  p,
  pb,
  pl,
  pr,
  pt,
  px,
  py,
  w,
  hMax,
  hMin,
  wMax,
  position,
  top,
  bottom,
  left,
  right,
  display,
  wMin,
  ...otherProps
}: IBoxProps) {
  const theme = useTheme();

  if (!theme) {
    throw new Error(
      '<Box/> must be inside <ThemeProvider /> with a value, import {ThemeProvider} from "knack-ui" '
    );
  }
  const indentStyles = useMemo(
    () =>
      calculateIndentStyles(
        {
          display,
          top,
          bottom,
          left,
          right,
          position,
          mr,
          mx,
          mb,
          my,
          p,
          py,
          px,
          pt,
          pb,
          wMax,
          wMin,
          hMax,
          w,
          m,
          mt,
          ml,
          pl,
          pr,
          hMin
        },
        theme.scaleDenominator
      ),
    [
      display,
      top,
      bottom,
      left,
      right,
      position,
      mr,
      mx,
      mb,
      my,
      p,
      py,
      px,
      pt,
      pb,
      wMax,
      wMin,
      hMax,
      w,
      m,
      mt,
      ml,
      pl,
      pr,
      hMin
    ]
  );

  return { indentStyles, otherProps };
}
export default useBoxProps;
