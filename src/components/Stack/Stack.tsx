import { forwardRef, CSSProperties } from "react";
import styled, { css } from "styled-components";

import * as Polymorphic from "../../types/helpers";
import { Box, IBoxProps } from "../Box";
import useStackProps from "./useStackProps";

/**
 * One limitation with Stack that it affects absolute children with `margin-top`
 */
interface StackProps extends IBoxProps {
  /**
   * Controls flex direction
   * @default 'row'
   */
  direction?: CSSProperties["flexDirection"];

  /**
   * controls `flex-wrap` property;
   */
  flexWrap?: CSSProperties["flexWrap"];
  /**
   * Controls `align-items` flex property
   */
  alignItems?: CSSProperties["alignItems"];
  /**
   * Controls `justfify-content` flex property
   */
  justifyContent?: CSSProperties["justifyContent"];
  /**
   * Spacing between items, measured by `value * 0.25rem`
   *
   * @example <caption>Spacing of 0.5rem between elements</caption>
   *
   *  gap={2} === gap= 2 * 0.25rem
   * @default 0
   */
  gap?: number;
}

const Stack = forwardRef((props, ref) => {
  const { indentStyles, otherProps } = useStackProps(props);
  return <Flex ref={ref} stackIndentStyles={indentStyles} {...otherProps} />;
}) as Polymorphic.ForwardRefComponent<"div", StackProps>;

export default Stack;
export type { StackProps };

const Flex = styled(Box)<{ stackIndentStyles: {} }>`
  ${(p) => p.stackIndentStyles && css(p.stackIndentStyles)}
`;
