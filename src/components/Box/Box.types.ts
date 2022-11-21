import { CSSProperties } from "styled-components";

export interface IBoxProps {
  /** Sets the `inline-block` property */
  display?: CSSProperties["display"];

  /** CSS `flex` property */
  flex?: CSSProperties["flex"];

  /** CSS `margin` property */
  m?: number | string;

  /** CSS `margin-top` property */
  mt?: number | string;

  /** CSS `margin-right` property */
  mr?: number | string;

  /** CSS `margin-bottom` property */
  mb?: number | string;

  /** CSS `margin-left` property */
  ml?: number | string;

  /** CSS `margin-left` and `margin-right` property */
  mx?: number | string;

  /** CSS `margin-top` and `margin-bottom` property */
  my?: number | string;

  /** CSS `padding` property */
  p?: number | string;

  /** CSS `padding-top` property */
  pt?: number | string;

  /** CSS `padding-right` property */
  pr?: number | string;

  /** CSS `padding-bottom` property */
  pb?: number | string;

  /** CSS `padding-left` property */
  pl?: number | string;

  /** CSS `padding-left` and `padding-right` property */
  px?: number | string;

  /** CSS `padding-top` and `padding-bottom` property */
  py?: number | string;

  /**
   * CSS `width` property.
   * If its value is less than 1, is considered as a fraction of 100%.
   * If its value is more than 1, is considered as value in px, if it is a string, is passed as is.
   */
  w?: number | string;

  /**
   * CSS `min-width` property.
   * If its value is less than 1, is considered as a fraction of 100%.
   * If its value is more than 1, is considered as value in px, if it is a string, is passed as is.
   */
  wMin?: number | string;

  /**
   * CSS `max-width` property.
   * If its value is less than 1, is considered as a fraction of 100%.
   * If its value is more than 1, is considered as value in px, if it is a string, is passed as is.
   */
  wMax?: number | string;

  /**
   * CSS `height` property.
   * If its value is less than 1, is considered as a fraction of 100%.
   * If its value is more than 1, is considered as value in px, if it is a string, is passed as is.
   */
  h?: number | string;

  /**
   * CSS `min-height` property.
   * If its value is less than 1, is considered as a fraction of 100%.
   * If its value is more than 1, is considered as value in px, if it is a string, is passed as is.
   */
  hMin?: number | string;

  /**
   * CSS `max-height` property.
   * If its value is less than 1, is considered as a fraction of 100%.
   * If its value is more than 1, is considered as value in px, if it is a string, is passed as is.
   */
  hMax?: number | string;

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
}
