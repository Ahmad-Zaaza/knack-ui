import { CSSProperties, ElementType } from "react";
import { PolymorphicComponentProps } from "../../types/polymorphic";
import {
  ExtendableCSSProps,
  ThemeBorderRadiuses
} from "../../theme/theme.types";

export interface IBoxProps extends ExtendableCSSProps {
  /**
   * Multiplier of all indents. For example, if you specify a margin-top equal to 3 (mt = {3}), it will be 12px (3 * 4 = 12).
   * @default 4
   */
  scaleIndent?: number;

  /** CSS `position` property */
  position?: CSSProperties["position"];
  /** CSS `top` property */
  top?: number | string;
  /** CSS `left` property */
  left?: number | string;
  /** CSS `bottom` property */
  bottom?: number | string;
  /** CSS `right` property */
  right?: number | string;

  zIndex?: number;
  elevation?: number;

  /**
   * CSS `border-radius` property, compatible with theme `borderRadiuses` prop
   */
  br?: keyof ThemeBorderRadiuses | number;

  /**
   * If `true`, the background color will match the `paper` theme color. best practice is to dynamically change the `paper` theme color to match color scheme.
   *
   */
  paper?: boolean;
}

export type BoxPolymorphicProps<C extends ElementType> =
  PolymorphicComponentProps<C, IBoxProps>;
