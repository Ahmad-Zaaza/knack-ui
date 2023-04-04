import { useMemo } from "react";
import useKnackTheme from "../../utils/useTheme";
import { IBoxProps } from "./Box.types";
import {
  calculateIndentStyles,
  getAutoOrScaleIndent
} from "../../utils/helpers";
import { ThemeBorderRadiuses } from "../../theme/theme.types";

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
  br,
  flex,
  zIndex,
  elevation = 0,

  ...otherProps
}: IBoxProps) {
  const theme = useKnackTheme();

  const borderRadiusStyles = useMemo(() => {
    if (
      typeof br === "string" &&
      ["xsmall", "small", "medium", "large", "xlarge", "full"].includes(br)
    ) {
      return {
        "border-radius": theme.borderRadiuses[br as keyof ThemeBorderRadiuses]
      };
    }
    return {
      "border-radius": getAutoOrScaleIndent(br as number)
    };
  }, [br, theme]);

  const elevationStyles = useMemo(() => {
    const elevations = theme.elevations[elevation];

    return {
      ...(paper && { "background-color": theme.colors.paper }),
      ...elevations
    };
  }, [theme, elevation, paper]);

  const indentStyles = useMemo(
    () =>
      calculateIndentStyles({
        display,

        top,
        bottom,
        "inset-inline-start": left,
        "inset-inline-end": right,
        position,
        margin: m,
        "margin-right": mr,
        "margin-left": ml,
        "margin-top": mt,
        "margin-bottom": mb,
        "margin-inline": mx,
        "margin-block": my,
        padding: p,
        "padding-right": pr,
        "padding-left": pl,
        "padding-top": pt,
        "padding-bottom": pb,
        "padding-inline": px,
        "padding-block": py,
        width: w,
        "max-width": wMax,
        "min-width": wMin,
        height: h,
        "max-height": hMax,
        "min-height": hMin,
        "z-index": zIndex,
        flex
      }),
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
      h,
      hMin,
      zIndex,
      flex
    ]
  );
  return {
    indentStyles: { ...indentStyles, ...borderRadiusStyles },
    otherProps,
    elevationStyles
  };
}
export default useBoxProps;
