import { builtInBorderRadiuses, builtInColors } from "./builtInTokens";
import { Theme } from "./theme.types";

export const defaultTheme: Theme = {
  colors: builtInColors,
  borderRadiuses: builtInBorderRadiuses,
  scaleDenominator: 4
};
