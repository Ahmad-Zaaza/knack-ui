import { useMemo } from "react";
import { ELEVATIONS } from "../../styles/constants";
import { removeUndefinedKeys } from "../../utils/helpers";
import useKnackTheme from "../../utils/useTheme";
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
    width: getSize(props.w),
    height: getSize(props.h),
    "min-width": getSize(props.wMin),
    "max-width": getSize(props.wMax),
    "min-height": getSize(props.hMin),
    "max-height": getSize(props.hMax),
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
  paper,
  h,
  elevation = 0,

  ...otherProps
}: IBoxProps) {
  const theme = useKnackTheme();

  const elevationStyles = useMemo(() => {
    let elevations = ELEVATIONS.light[elevation];
    if (theme.mode === "dark") {
      elevations = ELEVATIONS.dark[elevation];
    }
    return {
      ...(paper && { "background-color": theme.colors.paper }),
      ...elevations
    };
  }, [theme, elevation, paper]);

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
          h,
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
      hMin,
      h
    ]
  );

  return { indentStyles, otherProps, elevationStyles };
}
export default useBoxProps;
